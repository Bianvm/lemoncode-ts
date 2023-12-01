
import {
    dameCarta,
    mePlanto,
    nuevaPartida,
    queHubieraPasado
} from './ui';
const buttonMePlanto = document.getElementById('me-planto');
const buttonDeduccion = document.getElementById('boton-deduccion');
const buttonDameCarta = document.getElementById('button-dameCarta');
const nuevaPartidaButton = document.getElementById("nueva-partida");
if (buttonMePlanto !== null && buttonMePlanto !== null && buttonMePlanto instanceof HTMLButtonElement) {
    buttonMePlanto.addEventListener('click', mePlanto);
}

if (buttonDameCarta !== null &&
    buttonDameCarta !== undefined &&
    buttonDameCarta instanceof HTMLButtonElement) {
    buttonDameCarta.addEventListener('click', dameCarta);
}

if (nuevaPartidaButton !== null &&
    nuevaPartidaButton !== undefined &&
    nuevaPartidaButton instanceof HTMLButtonElement) {
    nuevaPartidaButton.addEventListener('click', nuevaPartida);
}

if (buttonDeduccion !== null &&
    buttonDeduccion !== undefined &&
    buttonDeduccion instanceof HTMLButtonElement) {
    buttonDeduccion.addEventListener('click', queHubieraPasado);
}
