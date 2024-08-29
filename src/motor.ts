import { PrecioReserva, Reserva, reservas } from "./model";

//Crear una clase base con la funcionalidad común, y dos clases hijas una con el caso para cliente particular y otra para tour operador.
//En el constructor de la clase base, introduce la lista de precios de habitaciones,
//¿Qué tendrás que hacer para que en el hijo puedas inicializar la clase?
abstract class GestorReservas {
  abstract calcularPrecioReservas(reservas: Array<Reserva>): PrecioReserva;
}

//crear una clase que reciba la lista de reservas y calcule el subtotal y el total teniendo en cuenta los anteriores requisitos.
class GestorReservasPrticulares extends GestorReservas {
  calcularPrecioReservas(reservas: Array<Reserva>): PrecioReserva {
    const precioSinIva = reservas.reduce((valorPrevio, valorActual) => {
      const precioPersonas = (valorActual.pax - 1) * 40; //(1pax-1pax)*40 ->(2pax-1pax)*40
      const precioDesayuno = valorActual.desayuno ? valorActual.pax * 15 : 0;
      const precioHabitacion =
        valorActual.tipoHabitacion === "standard" ? 100 : 150;
      return (
        valorPrevio +
        (precioHabitacion + precioPersonas) * valorActual.noches +
        precioDesayuno
      ); //->
    }, 0);

    return {
      subtotal: precioSinIva,
      total: precioSinIva * 1.21,
    };
  }
}

//Todas las habitaciones tienen el mismo precio (100 €).
//Adicionalmente se le aplica un 15 % de descuento a los servicios contratados.
//Crear una clase que herede de la primera que cubra el caso del cálculo de totales y subtotales para el tour operador.
class GestorReservaEspecialTour extends GestorReservas {
  constructor() {
    super();
  }
  calcularPrecioReservas(reservas: Array<Reserva>): PrecioReserva {
    const precioSinIva = reservas.reduce((valorPrevio, valorActual) => {
      const precioPersonas = (valorActual.pax - 1) * 40; //(1pax-1pax)*40 ->(2pax-1pax)*40
      const precioHabitacion = 100;
      const precioDesayuno = valorActual.desayuno ? valorActual.pax * 15 : 0;
      return (
        valorPrevio +
        (precioHabitacion + precioPersonas) * 0.85 +
        valorActual.noches +
        precioDesayuno
      ); //->
    }, 0);
    return {
      subtotal: precioSinIva,
      total: precioSinIva * 1.21,
    };
  }
}

const reservaParticulares = new GestorReservasPrticulares();
console.log(reservaParticulares.calcularPrecioReservas(reservas));
const gestionReservaEspecial = new GestorReservaEspecialTour();
console.log(gestionReservaEspecial.calcularPrecioReservas(reservas));
