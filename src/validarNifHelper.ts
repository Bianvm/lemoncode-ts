const __CUANTAS_LETRAS = 23;
const __LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
export const calculaIndiceLetra = (numero: number) => numero % __CUANTAS_LETRAS;
export const obtenLetra = (indice: number) => __LETRAS[indice];