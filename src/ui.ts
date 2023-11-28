import {
    TOTAL_SCORE_TEXT,
} from "./model";

export const buttonMePlanto = document.getElementById('me-planto');
export const buttonDeduccion = document.getElementById('boton-deduccion');
export const buttonDameCarta = document.getElementById('button-dameCarta');
export const nuevaPartidaButton = document.getElementById("nueva-partida");

export function cambiarImagen(url: string) {
    const baraja = document.getElementById('boca-abajo');
    if (baraja !== null && baraja !== undefined && baraja instanceof HTMLImageElement) {
        baraja.src = url;
    }
}
export function iniciarPartida() {
    const estadoJuegoDiv = document.getElementById('estado-juego');
    if (estadoJuegoDiv !== null &&
        estadoJuegoDiv !== undefined &&
        estadoJuegoDiv instanceof HTMLDivElement) {
        estadoJuegoDiv.textContent = "";
    }
}
export function muestraPuntuacion(puntuacion: number) {
    const contadorPuntos = document.getElementById('show-score');
    if (contadorPuntos !== null &&
        contadorPuntos !== undefined &&
        contadorPuntos instanceof HTMLDivElement) {
        contadorPuntos.textContent = `${TOTAL_SCORE_TEXT} ${puntuacion.toString()}`;
    }
}

export function mostrarMensaje(mensaje: string) {
    const estadoJuegoDiv = document.getElementById('estado-juego');
    if (mensaje && estadoJuegoDiv !== null &&
        estadoJuegoDiv !== undefined &&
        estadoJuegoDiv instanceof HTMLDivElement) {
        estadoJuegoDiv.textContent = mensaje;
    }
}
export function cambiarEstadoBotones() {
    if (buttonDameCarta !== null &&
        buttonDameCarta instanceof HTMLButtonElement) {
        buttonDameCarta.disabled = !buttonDameCarta.disabled;
    }
    if (buttonMePlanto !== null &&
        buttonMePlanto instanceof HTMLButtonElement) {
        buttonMePlanto.disabled = !buttonMePlanto.disabled;
    }
    if (nuevaPartidaButton !== null &&
        nuevaPartidaButton !== undefined &&
        nuevaPartidaButton instanceof HTMLButtonElement) {
        nuevaPartidaButton.disabled = !nuevaPartidaButton.disabled;
    }
}
export function cambiarBotonDeduccion() {
    if (buttonDeduccion !== null &&
        buttonDeduccion !== undefined &&
        buttonDeduccion instanceof HTMLButtonElement) {
        buttonDeduccion.disabled = !buttonDeduccion.disabled;
    }
}
