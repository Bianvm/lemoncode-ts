import { productos } from "./mock";
import { LineaTicket, TicketFinal } from "./model";
import {
  cacularPrecioTotalConIva,
  calcularTotalSinIva,
  calcularTicket,
} from "./motor";

describe("motor", () => {
  describe("calcularPrecioTotalTicket", () => {
    it("debería devolver el valor total del ticket", () => {
      // Arrange
      const lineasTicket: LineaTicket[] = productos;
      // Act
      const result = cacularPrecioTotalConIva(lineasTicket);
      // Assert
      const expectedResult = 88.69;
      expect(result).toBe(expectedResult);
    });
  });

  describe("calcularTotalSinIva", () => {
    it("Debería devolver el precio total del ticket sin IVA aplicado", () => {
      //arrange
      const lineasTicket: LineaTicket[] = productos;
      //act
      const result = calcularTotalSinIva(lineasTicket);
      //assert
      const expectedResult = 75;
      expect(result).toBe(expectedResult);
    });
  });

  describe("calcularTicket", () => {
    it.only("Debería devolver LOS PRECIOS TOTALES", () => {
      //arrange
      const lineasTicket: LineaTicket[] = [
        {
          cantidad: 1,
          producto: {
            nombre: "producto1",
            precio: 1,
            tipoIva: "general",
          },
        },
      ];
      //act
      const result = calcularTicket(lineasTicket);
      //assert
      const expectedResult: TicketFinal = {
        desgloseIva: [],
        lineas: [
          {
            cantidad: 1,
            nombre: "producto1",
            precioConIva: 1.21,
            precionSinIva: 1,
            tipoIva: "general",
          },
        ],
        total: {
          totalConIva: 0,
          totalIva: 0,
          totalSinIva: 0,
        },
      };
      expect(result).toBe(expectedResult);
    });
  });
});
