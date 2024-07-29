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

    it("La función debería devolver que no es valido cuando la clave no tine mayúsculas y minúsculas y devolver mensaje de error", () => {
      //arrange
      const clave: string = "ashb12";
      //act
      const result = tieneMayusculasYMinusculas(clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: false,
        error: "La clave debe de tener mayúsculas y minúsculas",
      };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("tieneNumeros", () => {
    it("comprueba que la clave tiene digitos", () => {
      //arrange
      const clave: string = "aer5246P";
      //act
      const result = tieneNumeros(clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: true,
        error: "",
      };
      expect(result).toStrictEqual(expectedResult);
    });

    it("comprueba que la clave no tiene digitos y devuleve mensaje de error", () => {
      //arrange
      const clave: string = "aerllpso";
      //act
      const result = tieneNumeros(clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: false,
        error: "La clave debe de tener números",
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

    it("comprueba que la clave no tiene carácteres especiales y devuelve error", () => {
      //arrange
      const clave: string = "4dhul23nk";
      //act
      const result = tieneCaracteresEspeciales(clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: false,
        error: "La clave debe de tener caracteres especiales",
      };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("tieneLongitudMinima", () => {
    it("comprueba que la longitud mínima son 8 carácteres", () => {
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

    it("comprueba que la longitud mínima son 8 carácteres", () => {
      //arrange
      const clave: string = "omn123";
      //act
      const result = tieneLongitudMinima(clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: false,
        error: "La clave debe de tener una longitud mínima de 8 caracteres",
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

    it("comprueba que la clave y usuario coinciden y devuelve error", () => {
      //arrange
      const clave: string = "aloj7863bbj";
      const nombreUsuario: string = "aloj7863bbj";
      //act
      const result = tieneNombreUsuario(nombreUsuario, clave);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: false,
        error: "La clave no debe tener el nombre del usuario",
      };
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe("tienePalabrasComunes", () => {
    it("debe verificar que la clave no tenga palabras típicas 'sencillas' que puedan comprometer la seguridad", () => {
      //arrange
      const clave: string = "asj@fhi?l45po";
      const clavesComunes: typeof commonPasswords = ["password", "123456789"];
      //act
      const result = tienePalabrasComunes(clave, clavesComunes);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: true,
        error: "",
      };
      expect(result).toStrictEqual(expectedResult);
    });

    it("debe verificar que la clave no tenga palabras típicas 'sencillas' que puedan comprometer la seguridad", () => {
      //arrange
      const clave: string = "password";
      const clavesComunes: typeof commonPasswords = [""];
      //act
      const result = tienePalabrasComunes(clave, clavesComunes);
      //assert
      const expectedResult: ValidacionClave = {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
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
