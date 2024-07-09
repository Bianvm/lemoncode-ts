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
} from "./motor";

const botonInicioPartida = document.getElementById("boton-empezar-partida");
const botonReiniciarPartida = document.getElementById("reiniciar-partida");

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
  mostrarMensajeFinDePartida("¡Suerte!");
};

export function cambiarBotonIniciarPartida() {
  cambiarEstadoBoton(botonInicioPartida, () => null);
}
if (botonInicioPartida && botonInicioPartida instanceof HTMLElement) {
  botonInicioPartida.addEventListener("click", iniciarPartidaHandler);
}
if (botonReiniciarPartida && botonReiniciarPartida instanceof HTMLElement) {
  botonReiniciarPartida.addEventListener("click", reiniciarPartidaHandler);
}

function ocultarEstadoFinDePartida() {
  const estadoJuegoDiv = document.getElementById("estado-partida");
  if (
    estadoJuegoDiv !== null &&
    estadoJuegoDiv !== undefined &&
    estadoJuegoDiv instanceof HTMLDivElement
  ) {
    estadoJuegoDiv.style.display = "none";
  }
}
export function mostrarMensajeFinDePartida(mensaje: string) {
  const estadoJuegoDiv = document.getElementById("estado-partida");
  if (
    mensaje &&
    estadoJuegoDiv !== null &&
    estadoJuegoDiv !== undefined &&
    estadoJuegoDiv instanceof HTMLDivElement
  ) {
    estadoJuegoDiv.style.display = "block";
    estadoJuegoDiv.textContent = mensaje;
  }
}
export function reiniciarPartidaHandler() {
  recrearTablero();
  barajarCartas(tablero.cartas);
  ocultarCartas();
  actualizarTablero();
  ocultarEstadoFinDePartida();
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

const cargarTablero = () => {
  for (let i = 0; i < tablero.cartas.length; i++) {
    const dataIndiceId = `[data-indice-id="${i}"]`;
    const elementoCarta = document.querySelector(`div${dataIndiceId}`);
    if (elementoCarta && elementoCarta instanceof HTMLDivElement) {
      elementoCarta.addEventListener("click", () => {
        if (sePuedeVoltearLaCarta(tablero, i)) {
          voltearLaCarta(tablero, i);
          mostrarImagen(i);
          comprobarQueSonPareja();
        } else {
          console.log("no se puede dar la vuelta a la carta");
        }
      });
    }
  }
};

document.addEventListener("DOMContentLoaded", cargarTablero);

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
