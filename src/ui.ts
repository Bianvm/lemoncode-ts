import {
    TOTAL_SCORE_TEXT,
    BACK_IMAGE,
    getPuntuacion,
    setPuntuacion,
} from "./model";
import {
    obtenerCarta,
    obtenerNumeroDeCarta,
    puntosPorCarta,
    muestraCarta,
    sumarPuntos
} from "./motor";
export function dameCarta() {
    const idCarta = obtenerNumeroDeCarta();
    const cartaAleatoria = obtenerCarta(idCarta);
    muestraCarta(cartaAleatoria);
    const puntosDeCarta = puntosPorCarta(idCarta);
    sumarPuntos(puntosDeCarta);
    muestraPuntuacion(getPuntuacion());
    gestionarPartida(getPuntuacion());
}
export function cambiarImagen(url: string) {
    const baraja = document.getElementById('boca-abajo');
    if (baraja !== null && baraja !== undefined && baraja instanceof HTMLImageElement) {
        baraja.src = url;
    }
}
export function queHubieraPasado() {
    const idCarta = obtenerNumeroDeCarta();
    const cartaDeducida = obtenerCarta(idCarta);
    muestraCarta(cartaDeducida);
    const puntosDeCarta = puntosPorCarta(idCarta);
    sumarPuntos(puntosDeCarta);
    muestraPuntuacion(getPuntuacion());
    resultadoDeduccion();
    cambiarEstadoBotones();

}
export function resultadoDeduccion() {
    const puntuacion = getPuntuacion();
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
    setPuntuacion(0);
    muestraPuntuacion(0);
    cambiarImagen(BACK_IMAGE);
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
    const buttonDameCarta = document.getElementById('button-dameCarta');
    if (buttonDameCarta !== null &&
        buttonDameCarta instanceof HTMLButtonElement) {
        buttonDameCarta.disabled = !buttonDameCarta.disabled;
    }
    const buttonMePlanto = document.getElementById('me-planto');
    if (buttonMePlanto !== null &&
        buttonMePlanto instanceof HTMLButtonElement) {
        buttonMePlanto.disabled = !buttonMePlanto.disabled;
    }
    const nuevaPartidaButton = document.getElementById("nueva-partida");
    if (nuevaPartidaButton !== null &&
        nuevaPartidaButton !== undefined &&
        nuevaPartidaButton instanceof HTMLButtonElement) {
        nuevaPartidaButton.disabled = !nuevaPartidaButton.disabled;
    }
}
export function cambiarBotonDeduccion() {
    const buttonDeduccion = document.getElementById('boton-deduccion');
    if (buttonDeduccion !== null &&
        buttonDeduccion !== undefined &&
        buttonDeduccion instanceof HTMLButtonElement) {
        buttonDeduccion.disabled = !buttonDeduccion.disabled;
    }
}
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
    ponerTexto(getPuntuacion());
    cambiarEstadoBotones();
    cambiarBotonDeduccion();
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