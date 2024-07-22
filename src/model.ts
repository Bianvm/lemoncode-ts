export interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

export const MAYUS_REGEX = /[A-Z]+/;
export const MINUS_REGEX = /[a-z]+/;
export const SPECIAL_CHARACTER_REYEX = /\W/g;
export const NUMBER_REGEX = /\d/;
export const LONGITUD_MINIMA = 8;
