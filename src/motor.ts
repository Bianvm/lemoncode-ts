import {
  /*LineaDeTicket*/
  TipoIva,
  ResultadoLineaTicket,
  TicketFinal,
  TotalPorTipoIva,
  LineaTicket,
  Producto,
} from "./model";

const obtenerPorcentajeIva = (tipoIva: TipoIva): number => {
  switch (tipoIva) {
    case "general":
      return 0.21; // 21%
    case "reducido":
      return 0.1; // 10%
    case "superreducidoA":
      return 0.05; // 5%
    case "superreducidoB":
      return 0.04; // 4%
    case "superreducidoC":
      return 0; // 0% al no haver IVA se multiplica *1 para obtener el precio íntegro del producto
    case "sinIva":
      return 0; //0%
  }
};

const obtenerPrecioIva = (producto: Producto): number => {
  return obtenerPorcentajeIva(producto.tipoIva) * producto.precio;
};

const trasformarLineaTicket = (
  lineaTicket: LineaTicket
): ResultadoLineaTicket => {
  return {
    cantidad: lineaTicket.cantidad,
    nombre: lineaTicket.producto.nombre,
    precioConIva:
      lineaTicket.producto.precio + obtenerPrecioIva(lineaTicket.producto),
    precionSinIva: lineaTicket.producto.precio,
    tipoIva: lineaTicket.producto.tipoIva,
  };
};
//La función calculaTicket devolverá un ticket que contendrá la siguiente información: Por cada producto queremos el nombre, la cantidad, el precio sin IVA, el tipo de IVA y el precio con IVA.
export const mapeoResultadoLineaTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  return lineasTicket.map(trasformarLineaTicket);
};

const reduceTipoDeIva = (
  prevValue: TotalPorTipoIva[],
  currentValue: LineaTicket
): TotalPorTipoIva[] => {
  const index = prevValue.findIndex((value) => {
    return value.tipoIva === currentValue.producto.tipoIva;
  });
  if (index < 0) {
    return [
      ...prevValue,
      {
        cuantia:
          obtenerPrecioIva(currentValue.producto) * currentValue.cantidad,
        tipoIva: currentValue.producto.tipoIva,
      },
    ];
  }
  prevValue[index].cuantia +=
    obtenerPrecioIva(currentValue.producto) * currentValue.cantidad;
  return prevValue;
};

export const calcularDesgloseIva = (
  lineasTicket: LineaTicket[]
): TotalPorTipoIva[] => {
  return lineasTicket.reduce(reduceTipoDeIva, []);
};

export const calcularTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  return {
    lineas: mapeoResultadoLineaTicket(lineasTicket),
    total: {
      totalConIva: cacularPrecioTotalConIva(lineasTicket),
      totalSinIva: calcularTotalSinIva(lineasTicket),
      totalIva: calcularTotalIva(lineasTicket),
    },
    desgloseIva: calcularDesgloseIva(lineasTicket),
  };
};

export const calcularTotalSinIva = (lineaTicket: LineaTicket[]): number => {
  return lineaTicket.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.cantidad * currentValue.producto.precio;
  }, 0);
};

export const cacularPrecioTotalConIva = (lineaTicket: LineaTicket[]): number => {
  return lineaTicket.reduce((prevValue, currentValue) => {
    return (
      prevValue +
      currentValue.cantidad *
        (currentValue.producto.precio + obtenerPrecioIva(currentValue.producto))
    );
  }, 0);
};
const calcularTotalIva = (lineaTicket: LineaTicket[]): number => {
  return lineaTicket.reduce((prevValue, currentValue) => {
    return (
      prevValue +
      currentValue.cantidad * obtenerPrecioIva(currentValue.producto)
    );
  }, 0);
};
