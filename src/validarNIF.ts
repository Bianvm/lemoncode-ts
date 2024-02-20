/* validar un NIF
@param {string} numero is a number type and must be 8 chacacteres long
@param {strin} letra is a string type and must be a unique capital letter
@returns {boolean} 
*/
import { calculaIndiceLetra, obtenLetra } from "./validarNifHelper"

const laLetraEstaBienFormada = (numero: number, letra: string) => {
    if (numero.toString().length !== 8 || letra.length !== 1) {
        throw Error("El número debe tener 8 números y la letra un carácter");
    }
};
export function validarNif(numero: number, letra: string) {
    laLetraEstaBienFormada(numero, letra);
    const resto = calculaIndiceLetra(numero);
    return letra === obtenLetra(resto);
}