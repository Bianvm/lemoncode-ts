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
/*const crearCartaInicial = (idCarta: number, imgUrl: string): Carta => ({
  idCarta,
  imgUrl,
  estaVuelta: false,
  encontrada: false,
});*/

function repetirCartas(infoCartas: InfoCarta[], vecesARepepetir: number = 2) {
  //función que crea el array con las cartas repetidas y nuevos atributos
  let cards: Carta[] = []; //crea un array vacío carta:Carta[]->interfaz
  for (let i = 0; i < vecesARepepetir; i++) {
    //repite los elementos del array
    cards = [
      ...cards, //en el array cards se copia lo que ya había en el array carta:Carta[]
      ...infoCartas.map((c) => ({
        //mapeamos el contenido de Infocard[] para añadirlo al array cards:carta[]
        idCarta: c.idImg,
        imgUrl: c.imgUrl,
        estaVuelta: false,
        encontrada: false,
      })),
    ];
  }
  return cards; //devuelve el nuevo array
}

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  //nuevo array que recibe los parámetros de infocards:InfoCartas[] y cards:Cartas[] y los valores repetidos
  return repetirCartas(infoCartas); //devuelve la función que repite los elementos del array
};

// export const cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas); // creamos un nuevo array para las cartas del tablero que toma los valores de la función crearColeccionDeCartasInicial.

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
  cartas: crearColeccionDeCartasInicial(infoCartas),
  estadoPartida: "PartidaNoIniciada", //estado inicial de la partida
});

export const recrearTablero = () => {
  tablero = {
    cartas: crearColeccionDeCartasInicial(infoCartas),
    estadoPartida: "CeroCartasLevantadas",
  };
};

export let tablero: Tablero = crearTableroInicial();
