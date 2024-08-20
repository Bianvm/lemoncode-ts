const TODO_JUNTO = /[A-Z]{2}\d{22}/;
const CON_ESPACIO = /[A-Z]{2}\d{2} \d{4} \d{4} \d{2} \d{10}/;
const CON_GUIONES = /[A-Z]{2}\d{2}-\d{4}-\d{4}-\d{2}-\d{10}/;

export const validacionIban = [TODO_JUNTO, CON_ESPACIO, CON_GUIONES];

export interface DatosIdentificadoresBancos {
  nombreBanco: string;
  codigoSucursal: string;
  digitoDeControl: string;
  numeroDeCuenta: string;
}

export interface DatosBasicosBanco {
  nombreBanco: string;
  codigoBanco: string;
}

export interface ValorarErroresIban {
  ibanFormado: boolean;
  ibanIncorrecto: boolean;
}

export interface ValidacionDeUnIbanIntroducido {
  errores: ValorarErroresIban;
  datosBanco: DatosIdentificadoresBancos;
}

export const bancosDeEspana: DatosBasicosBanco[] = [
  { nombreBanco: "Abanca Corporación Bancaria", codigoBanco: "2080" },
  {
    nombreBanco: "Banca March",
    codigoBanco: "0061",
  },
  {
    nombreBanco: "BBVA Vigo",
    codigoBanco: "6621",
  },
  {
    nombreBanco: "BBVA",
    codigoBanco: "0182",
  },
  {
    nombreBanco: "ING Bank",
    codigoBanco: "1465",
  },
];

console.log(bancosDeEspana);
