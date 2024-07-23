import { commonPasswords } from "./mock";
import { ValidacionClave } from "./model";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./motor";

describe("motor", () => {
  describe("tieneMayusculasYMinusculas", () => {
    it("La función debería comprobar que la clave tine mayúsculas y minúsculas", () => {
      //arrange
      const clave: string = "ashTYb12";
      //act
      const result = tieneMayusculasYMinusculas(clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: true,
        error: "",
      };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("tieneNumeros", () => {
    it("comprueba que la clave tiene digitos", () => {
      //arrange
      const clave: string = "aer6778P";
      //act
      const result = tieneNumeros(clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: true,
        error: "",
      };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("tieneCaracteresEspeciales", () => {
    it("comprueba que la clave tenga carácteres especiales", () => {
      //arrange
      const clave: string = "@dhu$23nk";
      //act
      const result = tieneCaracteresEspeciales(clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: true,
        error: "",
      };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("tieneLongitudMinima", () => {
    it("comprueba que la longitud mínima son 6 carácteres", () => {
      //arrange
      const clave: string = "omn123m4";
      //act
      const result = tieneLongitudMinima(clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: true,
        error: "",
      };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("tieneNombreDeUsuario", () => {
    it("comprueba que la clave no coincide con el nombre de usuario", () => {
      //arrange
      const clave: string = "khou458?";
      const nombreUsuario: string = "aloj7863bbj";
      //act
      const result = tieneNombreUsuario(nombreUsuario, clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: true,
        error: "",
      };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("tienePalabrasComunes", () => {
    it("debe verificar que la clave no tenga palabras típicas 'sencillas' que puedan comprometer la seguridad", () => {
      //arrange
      const clave: string = "123456789";
      const clavesComunes: typeof commonPasswords = ["password"];
      //act
      const result = tienePalabrasComunes(clave, clavesComunes);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: true,
        error: "",
      };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("", () => {
    it("", () => {
      //arrange
      //act
      //assert
    });
  });

});
