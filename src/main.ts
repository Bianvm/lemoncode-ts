
import {
    dameCarta,
    nuevaPartida,
    queHubieraPasado,
    mePlanto,
} from './motor';
import {
    muestraPuntuacion,
    iniciarPartida,
    buttonMePlanto,
    buttonDameCarta,
    nuevaPartidaButton,
    buttonDeduccion,
} from './ui';
document.addEventListener("DOMContentLoaded", () => {
    iniciarPartida();
    muestraPuntuacion(0);
});
window.addEventListener('load', function () {
    muestraPuntuacion(0);
});


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
