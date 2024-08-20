import { isValidIBAN } from "ibantools";
import {
  validacionIban,
  ValidacionDeUnIbanIntroducido,
  DatosIdentificadoresBancos,
  bancosDeEspana,
} from "./model";

export const validarFormatoIban = (iban: string): boolean => {
  return validacionIban.some((val) => val.test(iban)); //some comprueba si algún elemento cumple la condición (como un for each). .test() comprueba que el valor cumple con la expresión regular
};

export const validarIban = (iban: string): boolean => {
  return isValidIBAN(iban);
};
const obtenerDatosBancarios = (
  iban: string,
  esValido: boolean,
  correctamenteFormateado: boolean
): DatosIdentificadoresBancos => {
  if (!esValido || !correctamenteFormateado)
    return {
      codigoSucursal: "",
      digitoDeControl: "",
      nombreBanco: "",
      numeroDeCuenta: "",
    };

  const codigoEntidad = iban.substring(2, 6);
  const condigoSucursal = iban.substring(7, 10);
  const digitoDeControl = iban.substring(11, 12);
  const numeroDeCuenta = iban.substring(13, 23);
  return {
    nombreBanco:
      bancosDeEspana.find((b) => b.codigoBanco === codigoEntidad)
        ?.nombreBanco ?? "",
    codigoSucursal: condigoSucursal,
    digitoDeControl: digitoDeControl,
    numeroDeCuenta: numeroDeCuenta,
  };
};

export const comprobarIban = (iban: string): ValidacionDeUnIbanIntroducido => {
  const ibanFormadoCorrectamente = validarFormatoIban(iban);
  const ibanTransformado = iban.replaceAll("-", "").replaceAll(" ", "");
  const ibanCorrecto = validarIban(ibanTransformado);
  const result = {
    errores: {
      ibanFormado: !ibanFormadoCorrectamente,
      ibanIncorrecto: !ibanCorrecto,
    },
    datosBanco: obtenerDatosBancarios(
      ibanTransformado,
      ibanCorrecto,
      ibanFormadoCorrectamente
    ),
  };

  return result;
};
