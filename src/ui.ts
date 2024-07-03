import { recrearTablero, tablero } from "./model";
import { iniciaPartida, barajarCartas, voltearLaCarta } from "./motor";

const botonInicioPartida = document.getElementById("boton-empezar-partida");
const botonReiniciarPartida = document.getElementById("reiniciar-partida");
const cardImage = document.getElementsByClassName("wrapper");

const cambiarEstadoBoton = (boton: HTMLElement | null, callback: Function) => {
  if (
    boton !== undefined &&
    boton !== null &&
    boton instanceof HTMLButtonElement
  ) {
    boton.disabled = !boton.disabled;
    callback();
  }
};

const iniciarPartidaHandler = () => {
  cambiarEstadoBoton(botonInicioPartida, () => iniciaPartida(tablero));
  cambiarEstadoBoton(botonReiniciarPartida, () => null);
};

export function cambiarBotonIniciarPartida() {
  cambiarEstadoBoton(botonInicioPartida, () => null);
}

export function reiniciarPartidaHandler() {
  recrearTablero();
  barajarCartas(tablero.cartas);
  actualizarTablero();
}

const actualizarTablero = () => {
  tablero.cartas.forEach((carta, index) => {
    const image = document.querySelector(`div[data-indice-id="${index}"] img`);
    if (
      image !== null &&
      image !== undefined &&
      image instanceof HTMLImageElement
    ) {
      if (carta.encontrada || carta.estaVuelta) {
        image.src = carta.imgUrl;
      } else {
        image.src = "";
      }
    }
  });
};

botonInicioPartida?.addEventListener("click", iniciarPartidaHandler);
botonReiniciarPartida?.addEventListener("click", reiniciarPartidaHandler);

for (let i = 0; i < cardImage.length; i++) {
  const card = cardImage.item(i);
  card?.addEventListener("click", (event) => {
    if (
      tablero.estadoPartida === "PartidaNoIniciada" ||
      tablero.estadoPartida === "PartidaCompleta"
    ) {
      return;
    }
    //añadido un listener a cada div de img
    // event.target devuelve el elemento sobre el que se ha hecho click
    const target = event.target;
    if (target instanceof HTMLElement) {
      const id = parseInt(target.getAttribute("data-indice-id") ?? "");
      voltearLaCarta(tablero, id);
      actualizarTablero();
    }
  });
}
