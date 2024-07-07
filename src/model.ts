export interface Carta {
  idCarta: number;
  imgUrl: string;
  estaVuelta: boolean;
  encontrada: boolean;
}

interface InfoCarta {
  idImg: number;
  imgUrl: string;
}

const infoCartas: InfoCarta[] = [
  {
    idImg: 1,
    imgUrl:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idImg: 2,
    imgUrl:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idImg: 3,
    imgUrl:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idImg: 4,
    imgUrl:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idImg: 5,
    imgUrl:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idImg: 6,
    imgUrl:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
];
const crearCartaInicial = (carta: InfoCarta): Carta => ({
  idCarta: carta.idImg,
  imgUrl: carta.imgUrl,
  estaVuelta: false,
  encontrada: false,
});

const crearColeccionDeCartasRepetidas = (infoCartas: InfoCarta[]): Carta[] => {
  //   nuevo array que recibe los parámetros de infocards:InfoCartas[] y cards:Cartas[] y los valores repetidos
  //   return repetirCartas(infoCartas); //devuelve la función que repite los elementos del array
  const cartasMapeadas = infoCartas.map(crearCartaInicial);
  return [
    ...structuredClone(cartasMapeadas), // usamos structuredClone para una copia profunda, por cada array que se quiere copiar. Evita la misma dirección de memoria
    ...structuredClone(cartasMapeadas),
  ];
};

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}
const crearTableroInicial = (): Tablero => ({
  cartas: crearColeccionDeCartasRepetidas(infoCartas),
  estadoPartida: "PartidaNoIniciada", //estado inicial de la partida
});

export const recrearTablero = () => {
  tablero = {
    cartas: crearColeccionDeCartasRepetidas(infoCartas),
    estadoPartida: "CeroCartasLevantadas",
  };
};

export let tablero: Tablero = crearTableroInicial();
