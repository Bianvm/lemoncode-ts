import { ValidacionDeUnIbanIntroducido } from "./model";
import { comprobarIban } from "./motor";

const botonValidarIban = document.getElementById("boton-validar");
const botonBorrar = document.getElementById("boton-borrar");
const ibanIntroducido = document.getElementById("iban-input");
const infoIbanFormado = document.getElementById("texto-iban-formado");
const infoIbanValidado = document.getElementById("iban-valido");
const nombreBanco = document.getElementById("nombre-banco");
const codigoSucursal = document.getElementById("codigo-sucursal");
const digitoControl = document.getElementById("digito-control");
const numeroDeCuenta = document.getElementById("numero-cuenta");

const clickEnBotonValidar = () => {
  if (!!ibanIntroducido && ibanIntroducido instanceof HTMLInputElement) {
    const resultado = comprobarIban(ibanIntroducido.value);
    console.log("resultado: ", resultado);
    cambiarEstadoDatosIban(resultado);
  }
};

const cambiarEstadoDatosIban = (informacion: ValidacionDeUnIbanIntroducido) => {
  if (!!infoIbanFormado && infoIbanFormado instanceof HTMLSpanElement) {
    infoIbanFormado.innerHTML = informacion.errores.ibanFormado
      ? "está mal formado"
      : "está bien formado";
  }
  if (!!infoIbanValidado && infoIbanValidado instanceof HTMLSpanElement) {
    infoIbanValidado.innerHTML = informacion.errores.ibanIncorrecto
      ? "no es válido"
      : "es válido";
  }

  if (!informacion.errores.ibanFormado && !informacion.errores.ibanIncorrecto) {
    if (!!nombreBanco && nombreBanco instanceof HTMLSpanElement) {
      nombreBanco.innerHTML = informacion.datosBanco.nombreBanco;
    }
    if (!!codigoSucursal && codigoSucursal instanceof HTMLSpanElement) {
      codigoSucursal.innerHTML = informacion.datosBanco.codigoSucursal;
    }
    if (!!digitoControl && digitoControl instanceof HTMLSpanElement) {
      digitoControl.innerHTML = informacion.datosBanco.digitoDeControl;
    }
    if (!!numeroDeCuenta && numeroDeCuenta instanceof HTMLSpanElement) {
      numeroDeCuenta.innerHTML = informacion.datosBanco.numeroDeCuenta;
    }
  } else {
    resetearDatosBanco();
  }
};

const resetearDatosBanco = () => {
  if (!!nombreBanco && nombreBanco instanceof HTMLSpanElement) {
    nombreBanco.innerHTML = "";
  }
  if (!!codigoSucursal && codigoSucursal instanceof HTMLSpanElement) {
    codigoSucursal.innerHTML = "";
  }
  if (!!digitoControl && digitoControl instanceof HTMLSpanElement) {
    digitoControl.innerHTML = "";
  }
  if (!!numeroDeCuenta && numeroDeCuenta instanceof HTMLSpanElement) {
    numeroDeCuenta.innerHTML = "";
  }
};

const clickBotonBorrar = () => {
  if (!!ibanIntroducido && ibanIntroducido instanceof HTMLInputElement) {
    ibanIntroducido.value = "";
  }
  if (!!infoIbanFormado && infoIbanFormado instanceof HTMLSpanElement) {
    infoIbanFormado.innerHTML = "";
  }
  if (!!infoIbanValidado && infoIbanValidado instanceof HTMLSpanElement) {
    infoIbanValidado.innerHTML = "";
  }
  resetearDatosBanco();
};

botonValidarIban?.addEventListener("click", clickEnBotonValidar);
botonBorrar?.addEventListener("click", clickBotonBorrar);
