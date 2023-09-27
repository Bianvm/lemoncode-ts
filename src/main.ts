import "./style.css";

let puntuacion = 0;
const contadorPuntos = document.getElementById('show-score');
const TOTAL_SCORE_TEXT = "Puntuación total: ";
function muestraPuntuacion() {
    if (contadorPuntos !== null && contadorPuntos !== undefined && contadorPuntos instanceof HTMLDivElement) {
        contadorPuntos.textContent = `${TOTAL_SCORE_TEXT} ${puntuacion.toString()}`;

    }

}
window.addEventListener('load', function () {
    muestraPuntuacion();
});

function dameCarta() {
    let cartaAleatoria = Math.floor(Math.random() * 10 + 1);
    if (cartaAleatoria > 7) {
        cartaAleatoria = cartaAleatoria + 2;
    }
    muestraCarta(cartaAleatoria);
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

const baraja = document.getElementById('boca-abajo');
function muestraCarta(idCarta: number): void {

    if (baraja !== null && baraja !== undefined && baraja instanceof HTMLImageElement) {
        const imagenCarta = mapearCartaAImagen(idCarta);
        baraja.src = imagenCarta;
    }
    puntuacion = puntuacion + idCarta;
    muestraPuntuacion();
    gameOver();
}

function terminarPartida() {
    if (buttonDameCarta !== null && buttonDameCarta instanceof HTMLButtonElement) {
        buttonDameCarta.disabled = true;
    }
    if (buttonMePlanto !== null && buttonMePlanto instanceof HTMLButtonElement) {
        buttonMePlanto.disabled = true;
    }
    if (nuevaPartidaButton !== null && nuevaPartidaButton !== undefined && nuevaPartidaButton instanceof HTMLButtonElement) {
        nuevaPartidaButton.disabled = false;
    }
}

function gameOver() {
    if (puntuacion > 7.5) {
        if (gameStatusDiv !== null && gameStatusDiv !== undefined && gameStatusDiv instanceof HTMLDivElement) {
            gameStatusDiv.textContent = "GAME OVER";
            terminarPartida();
        }
    }
}

const gameStatusDiv = document.getElementById('estado-juego');
const buttonMePlanto = document.getElementById('me-planto');
if (buttonMePlanto !== null && buttonMePlanto !== null && buttonMePlanto instanceof HTMLButtonElement) {
    buttonMePlanto.addEventListener('click', mePlanto);

}


function mePlanto() {
    if (gameStatusDiv !== null && gameStatusDiv !== undefined && gameStatusDiv instanceof HTMLDivElement) {
        if (puntuacion >= 6 && puntuacion <= 7) {
            gameStatusDiv.textContent = "casi, casi...";
        } else if (puntuacion === 5) {
            gameStatusDiv.textContent = "Te ha entrado el canguelo eh?";
        } else if (puntuacion <= 4) {
            gameStatusDiv.textContent = "Has sido muy conservador";

        } else if (puntuacion === 7.5) {
            gameStatusDiv.textContent = "¡Lo has clavado! ¡Enhorabuena!";
        }
        terminarPartida();

    }
}

function nuevaPartida() {
    if (buttonDameCarta !== null && buttonDameCarta instanceof HTMLButtonElement) {
        buttonDameCarta.disabled = false;
    }
    if (buttonMePlanto !== null && buttonMePlanto instanceof HTMLButtonElement) {
        buttonMePlanto.disabled = false;
    }
    if (nuevaPartidaButton !== null && nuevaPartidaButton !== undefined && nuevaPartidaButton instanceof HTMLButtonElement) {
        nuevaPartidaButton.disabled = true;
    }
    puntuacion = 0;
    muestraPuntuacion();
    if (baraja !== null && baraja !== undefined && baraja instanceof HTMLImageElement) {
        baraja.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
    if (gameStatusDiv !== null && gameStatusDiv !== undefined && gameStatusDiv instanceof HTMLDivElement) {
        gameStatusDiv.textContent = "";
    }

}

const nuevaPartidaButton = document.getElementById("nueva-partida");
if (nuevaPartidaButton !== null && nuevaPartidaButton !== undefined && nuevaPartidaButton instanceof HTMLButtonElement) {
    nuevaPartidaButton.addEventListener('click', nuevaPartida);
}