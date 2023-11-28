import {
    BACK_IMAGE,
} from "./model";
import {
    cambiarImagen,
    muestraPuntuacion,
    mostrarMensaje,
    cambiarBotonDeduccion,
    cambiarEstadoBotones,
} from './ui';

let puntuacion = 0;
export function gestionarPartida(puntuacion: number) {
    if (puntuacion === 7.5) {
        partidaGanada();
    }
    if (puntuacion > 7.5) {
        partidaPerdida();
    }
}
export function partidaGanada() {
    mostrarMensaje("¡Enhorabuena, has ganado!");
    cambiarEstadoBotones();
}
export function partidaPerdida() {
    mostrarMensaje("ohh... Has perdido :(");
    cambiarEstadoBotones();
}
export function mePlanto() {
    ponerTexto(puntuacion);
    cambiarEstadoBotones();
    cambiarBotonDeduccion();
}

export function dameCarta() {
    const idCarta = obtenerNumeroDeCarta();
    const cartaAleatoria = obtenerCarta(idCarta);
    muestraCarta(cartaAleatoria);
    const puntosDeCarta = puntosPorCarta(idCarta);
    sumarPuntos(puntosDeCarta);
    muestraPuntuacion(puntuacion);
    gestionarPartida(puntuacion);
}
export function obtenerCarta(cartaAleatoria: number) {
    return cartaAleatoria > 7 ? cartaAleatoria + 2 : cartaAleatoria;
}

export function muestraCarta(idCarta: number): void {
    const imagenCarta = mapearCartaAImagen(idCarta);
    cambiarImagen(imagenCarta);
}

export function puntosPorCarta(idCarta: number) {
    return idCarta > 7 ? 0.5 : idCarta;
}
export function obtenerNumeroDeCarta() {
    return Math.floor(Math.random() * 10 + 1);
}
export function sumarPuntos(puntosCarta: number) {
    puntuacion = puntuacion + puntosCarta;
}
export function ponerTexto(puntuacion: number) {
    if (puntuacion >= 6 && puntuacion <= 7) {
        mostrarMensaje("casi, casi...");
    } else if (puntuacion === 5) {
        mostrarMensaje("Te ha entrado el canguelo eh?");
    } else if (puntuacion <= 4) {
        mostrarMensaje("Has sido muy conservador");
    } else if (puntuacion === 7.5) {
        mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
    }
}
export function hubieraGanado() {
    mostrarMensaje("Hubieras ganado :)");
}
export function hubieraPerdido() {
    mostrarMensaje("Te has pasado, hubieras perdido :(");

}
export function indiferente() {
    mostrarMensaje("No te hubieras pasado, podrías haber seguido ;)");
}
export function obtenerCartaDeducida() {
    return Math.floor(Math.random() * 10 + 1);
}
export function queHubieraPasado() {
    const idCarta = obtenerCartaDeducida();
    const cartaDeducida = obtenerCarta(idCarta);
    muestraCarta(cartaDeducida);
    const puntosDeCarta = puntosPorCarta(idCarta);
    sumarPuntos(puntosDeCarta);
    muestraPuntuacion(puntuacion);
    resultadoDeduccion();
    cambiarEstadoBotones();

}
export function resultadoDeduccion() {
    if (puntuacion > 7.5) {
        hubieraPerdido();
        cambiarEstadoBotones();
        cambiarBotonDeduccion();
    }
    else if (puntuacion === 7.5) {
        hubieraGanado();
        cambiarEstadoBotones();
        cambiarBotonDeduccion();
    } else {
        indiferente();
        cambiarEstadoBotones();
        cambiarBotonDeduccion();
    }
}
export function nuevaPartida() {
    reiniciarValores();
    cambiarEstadoBotones();
    mostrarMensaje(" ");
}
export function reiniciarValores() {
    puntuacion = 0;
    muestraPuntuacion(puntuacion);
    cambiarImagen(BACK_IMAGE);
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