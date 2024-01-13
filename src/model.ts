export const TOTAL_SCORE_TEXT = "Puntuación total: ";
export const BACK_IMAGE = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
export const partida = { puntuacion: 0 }
export const setPuntuacion = (nuevaPuntuacion: number) => {
  partida.puntuacion = nuevaPuntuacion;
}

//interfaz estado partida
export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "HAS_ACERTADO"
  | "TE_HAS_PASADO";
