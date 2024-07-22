import {
  ValidacionClave,
  MAYUS_REGEX,
  MINUS_REGEX,
  SPECIAL_CHARACTER_REYEX,
  NUMBER_REGEX,
  LONGITUD_MINIMA,
} from "./model";
import { commonPasswords } from "./mock";

//analizar cada una de las condiciones, para que nuestra clave sea válida:
const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const mayusculaYMinuscula = tieneMayusculasYMinusculas(clave);
  const conCaracteresEspeciales = tieneCaracteresEspeciales(clave);
  const conNumero = tieneNumeros(clave);
  const longitudMinima = tieneLongitudMinima(clave);
  const tieneNombreDeUsuario = tieneNombreUsuario(nombreUsuario, clave);
  const conPalabrasComunes = tienePalabrasComunes(clave, commonPasswords);
  return {
    esValida:
      mayusculaYMinuscula.esValida &&
      conCaracteresEspeciales.esValida &&
      conNumero.esValida &&
      tieneNombreDeUsuario.esValida &&
      longitudMinima.esValida &&
      conPalabrasComunes.esValida,
    error:
      mayusculaYMinuscula.error ?? // nullish coalescin(??) devuelve su operando del lado derecho
      //cuando el operando del lado izquierdo es nullo undefined
      //y en caso contrario devuelve su operando del lado izquierdo.
      "" + conCaracteresEspeciales.error ??
      "" + conNumero.error ??
      "" + tieneNombreDeUsuario.error ??
      "" + longitudMinima.error ??
      "" + conPalabrasComunes.error,
  };
};
//La clave debe de tener mayúsculas y minúsculas.

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const tieneMayuscula = !!clave.match(MAYUS_REGEX);
  const tieneMinuscula = !!clave.match(MINUS_REGEX);
  const esValido = tieneMayuscula && tieneMinuscula;
  return {
    esValida: esValido,
    error: esValido ? "" : "La clave debe de tener mayúsculas y minúsculas",
  };
};

//La clave debe de tener números.
const tieneNumeros = (clave: string): ValidacionClave => {
  const tieneNumero = !!clave.match(NUMBER_REGEX);
  const esValido = tieneNumero;
  return {
    esValida: true,
    error: esValido ? "" : "La clave debe de tener números",
  };
};
//La clave debe de tener caracteres especiales (@,#,+, _, ...)
const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const tieneCaracteresEspeciales = !!clave.match(SPECIAL_CHARACTER_REYEX);
  const esValido = tieneCaracteresEspeciales;
  return {
    esValida: true,
    error: esValido ? "" : "La clave debe de tener caracteres especiales",
  };
};

//La clave debe de tener una longitud mínima de 8 caracteres.
const tieneLongitudMinima = (clave: string): ValidacionClave => {
  const esValido = clave.length >= LONGITUD_MINIMA;

  return {
    esValida: esValido,
    error: esValido
      ? ""
      : "La clave debe de tener una longitud mínima de 8 caracteres",
  };
};
//La clave no debe tener el nombre del usuario.
const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const noValido = clave.toLowerCase().includes(nombreUsuario.toLowerCase());

  return {
    esValida: !noValido,
    error: noValido ? "La clave no debe tener el nombre del usuario" : "",
  };
};
//La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const contraseñaNoValido = commonPasswords.filter((commonPassword) => {
    //filtrar las contraseñas que tienen parte de las señas comunes
    return clave.toLowerCase().includes(commonPassword.toLowerCase());
  });
  const esValido = contraseñaNoValido.length === 0;
  return {
    esValida: true,
    error: esValido ? "" : "La clave no debe de contener palabras comunes",
  };
};

//comprobar
console.log(validarClave("Bianca123", "hfyYnc7$", commonPasswords));
console.log(validarClave("Bianca123", "password123", commonPasswords));

