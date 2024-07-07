import { recrearTablero, tablero } from "./model";
import {
  iniciaPartida,
  barajarCartas,
  voltearLaCarta,
  sePuedeVoltearLaCarta,
  sonPareja,
  esPartidaCompleta,
  parejaEncontrada,
  parejaNoEncontrada,
  mostrarMensajeFinDePartida,
} from "./motor";

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
  ocultarCartas();
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

const ocultarCartas = () => {
  tablero.cartas.forEach((carta, index) => {
    const image = document.querySelector(`div[data-indice-id="${index}"] img`);
    if (
      image !== null &&
      image !== undefined &&
      image instanceof HTMLImageElement
    ) {
      if (!carta.encontrada && !carta.estaVuelta) {
        image.src = "";
      }
    }
  });
};

const mostrarImagen = (indiceCarta: number) => {
  const image = document.querySelector(
    `div[data-indice-id="${indiceCarta}"] img`
  );

  if (
    image !== null &&
    image !== undefined &&
    image instanceof HTMLImageElement
  ) {
    image.src = tablero.cartas[indiceCarta].imgUrl;
  }
};

botonInicioPartida?.addEventListener("click", iniciarPartidaHandler);
botonReiniciarPartida?.addEventListener("click", reiniciarPartidaHandler);

for (let i = 0; i < cardImage.length; i++) {
  const card = cardImage.item(i);
  card?.addEventListener("click", (event) => {
    if (
      tablero.estadoPartida === "PartidaNoIniciada" ||
      tablero.estadoPartida === "PartidaCompleta" ||
      tablero.estadoPartida === "DosCartasLevantadas"
    ) {
      return;
    }
    // event.target devuelve el elemento sobre el que se ha hecho click
    const target = event.target;
    if (target instanceof HTMLElement) {
      const id = parseInt(target.getAttribute("data-indice-id") ?? "");
      if (sePuedeVoltearLaCarta(tablero, i)) {
        voltearLaCarta(tablero, id);
        mostrarImagen(i);
        actualizarTablero();
        comprobarQueSonPareja();
      }
    }
  });
}
const comprobarQueSonPareja = () => {
  const indiceA = tablero.indiceCartaVolteadaA;
  const indiceB = tablero.indiceCartaVolteadaB;

  if (indiceA !== undefined && indiceB !== undefined) {
    if (sonPareja(indiceA, indiceB, tablero)) {
      parejaEncontrada(tablero, indiceA, indiceB);
    } else {
      parejaNoEncontrada(tablero, indiceA, indiceB);
      setTimeout(() => {
        ocultarCartas();
      }, 1000);
    }
    if (esPartidaCompleta(tablero)) {
      mostrarMensajeFinDePartida("");
    }
  }
};
