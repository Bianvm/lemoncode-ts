import "./style.css";

let puntuacion = 0;
const TOTAL_SCORE_TEXT = "Puntuación total: ";
const BACK_IMAGE = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
function muestraPuntuacion() {
    const contadorPuntos = document.getElementById('show-score');
    if (contadorPuntos !== null && contadorPuntos !== undefined && contadorPuntos instanceof HTMLDivElement) {
        contadorPuntos.textContent = `${TOTAL_SCORE_TEXT} ${puntuacion.toString()}`;
    }
}

window.addEventListener('load', function () {
    muestraPuntuacion();
});

function obtenerNumeroDeCarta() {
    return Math.floor(Math.random() * 10 + 1);
}

function obtenerCarta(cartaAleatoria: number) {
    return cartaAleatoria > 7 ? cartaAleatoria + 2 : cartaAleatoria;
}

function dameCarta() {
    const idCarta = obtenerNumeroDeCarta();
    const cartaAleatoria = obtenerCarta(idCarta);
    muestraCarta(cartaAleatoria);
    const puntosDeCarta = puntosPorCarta(idCarta);
    // sumar los puntos
    sumarPuntos(puntosDeCarta);
    // mostrar puntos
    muestraPuntuacion();


    // mostrar si hemos perdido
    const haPerdido = partidaPerdida();

    if (haPerdido) {
        gameOver();
    }
}
function puntosPorCarta(idCarta: number) {
    return idCarta > 7 ? 0.5 : idCarta;
}

function sumarPuntos(puntosCarta: number) {
    puntuacion = puntuacion + puntosCarta;
}
function partidaPerdida() {
    return puntuacion > 7.5;
}
const buttonDameCarta = document.getElementById('button-dameCarta');
if (buttonDameCarta !== null && buttonDameCarta !== undefined && buttonDameCarta instanceof HTMLButtonElement) {
    buttonDameCarta.addEventListener('click', dameCarta);
}

function mapearCartaAImagen(idCarta: number) {
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
            console.log(idCarta);
            return '';
    }
}


function muestraCarta(idCarta: number): void {
    const imagenCarta = mapearCartaAImagen(idCarta);
    cambiarImagen(imagenCarta);
}

function cambiarImagen(url: string) {
    const baraja = document.getElementById('boca-abajo');
    if (baraja !== null && baraja !== undefined && baraja instanceof HTMLImageElement) {
        baraja.src = url;
    }
}



function gameOver() {
    if (estadoJuegoDiv !== null && estadoJuegoDiv !== undefined && estadoJuegoDiv instanceof HTMLDivElement) {
        estadoJuegoDiv.textContent = "GAME OVER";
        cambiarEstadoBotones();
    }
}

const estadoJuegoDiv = document.getElementById('estado-juego');
const buttonMePlanto = document.getElementById('me-planto');
if (buttonMePlanto !== null && buttonMePlanto !== null && buttonMePlanto instanceof HTMLButtonElement) {
    buttonMePlanto.addEventListener('click', mePlanto);
}

function cambiarEstadoBotones() {
    if (buttonDameCarta !== null && buttonDameCarta instanceof HTMLButtonElement) {
        buttonDameCarta.disabled = !buttonDameCarta.disabled;
    }
    if (buttonMePlanto !== null && buttonMePlanto instanceof HTMLButtonElement) {
        buttonMePlanto.disabled = !buttonMePlanto.disabled;
    }
    if (nuevaPartidaButton !== null && nuevaPartidaButton !== undefined && nuevaPartidaButton instanceof HTMLButtonElement) {
        nuevaPartidaButton.disabled = !nuevaPartidaButton.disabled;
    }
}

function ponerTextoVictoria() {
    if (estadoJuegoDiv !== null && estadoJuegoDiv !== undefined && estadoJuegoDiv instanceof HTMLDivElement) {
        if (puntuacion >= 6 && puntuacion <= 7) {
            estadoJuegoDiv.textContent = "casi, casi...";
        } else if (puntuacion === 5) {
            estadoJuegoDiv.textContent = "Te ha entrado el canguelo eh?";
        } else if (puntuacion <= 4) {
            estadoJuegoDiv.textContent = "Has sido muy conservador";
        } else if (puntuacion === 7.5) {
            estadoJuegoDiv.textContent = "¡Lo has clavado! ¡Enhorabuena!"
        }
    }
}

function mePlanto() {
    ponerTextoVictoria();
    cambiarEstadoBotones();
}

function reiniciarValores() {
    puntuacion = 0;
    muestraPuntuacion();
    cambiarImagen(BACK_IMAGE);
    if (estadoJuegoDiv !== null && estadoJuegoDiv !== undefined && estadoJuegoDiv instanceof HTMLDivElement) {
        estadoJuegoDiv.textContent = "";
    }
}

function nuevaPartida() {
    cambiarEstadoBotones();
    reiniciarValores();
}

const nuevaPartidaButton = document.getElementById("nueva-partida");
if (nuevaPartidaButton !== null && nuevaPartidaButton !== undefined && nuevaPartidaButton instanceof HTMLButtonElement) {
    nuevaPartidaButton.addEventListener('click', nuevaPartida);
}
