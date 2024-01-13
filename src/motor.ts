import {
    partida, EstadoPartida
} from './model';

export function obtenerCarta(cartaAleatoria: number) {
    return cartaAleatoria > 7 ? cartaAleatoria + 2 : cartaAleatoria;
}
export function puntosPorCarta(idCarta: number) { 
    return idCarta > 7 ? 0.5 : idCarta;
}
export function obtenerNumeroDeCarta() { 
    return Math.floor(Math.random() * 10 + 1);
}
export function sumarPuntos(puntosCarta: number) { //esta
    return partida.puntuacion + puntosCarta;
}
export function mapearCartaAImagen(idCarta: number) {
    switch (idCarta) {
        case 1:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
        case 2:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
        case 3:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
        case 4:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
        case 5:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
        case 6:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
        case 7:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
        case 10:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
        case 11:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
        case 12:
            return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg'
        default:
            return '';
    }
}
export function obtenerEstadoPartida (): EstadoPartida {
 if (partida.puntuacion === 7.5){
    return "HAS_ACERTADO"
 }
 if (partida.puntuacion >7.5){
    return "TE_HAS_PASADO"
 }
 return "POR_DEBAJO_MAXIMO"
}