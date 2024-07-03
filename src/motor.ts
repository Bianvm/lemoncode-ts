import { Carta, Tablero } from "./model";

function shufflCardsArray<T>(cartas: Array<T>) {
  //asigna una posición aleatoria a las cartas
  for (let i = cartas.length - 1; i > 0; i--) {
    //bucle que va de la posición mx del array hasta la posición donde i>0
    const a = Math.floor(Math.random() * 2);
    [cartas[a], cartas[i]] = [cartas[i], cartas[a]]; //cambia las posiciones de las cartas del array de las cartas seleccionadas aleatoriamente
  }
  return cartas; //devuelve el array barajado
}

export const barajarCartas = (cartas: Carta[]): Carta[] => {
  return shufflCardsArray(cartas); //llama a la función de arriba
};

const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  const cartas = tablero.cartas;
  const cartasVolteadas = cartas.filter((c) => c.estaVuelta);
  if (cartasVolteadas.length === 2) {
    //Una carta no se puede voltear si no hay dos cartas ya volteadas
    return false;
  }
  const cartaActual = cartas[indice];
  if (cartaActual.estaVuelta || cartaActual.encontrada) {
    return false; // no se puede voltear si ya está encontrada o ya está ya volteada,
  }

  return true;
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  const sePuedeVoltear = sePuedeVoltearLaCarta(tablero, indice); //primero comprueba llamando a la funcion sePuedevoltear

  if (sePuedeVoltear) {
    //si se puede voltear->
    tablero.cartas[indice].estaVuelta = true; //se voltea la carta con el índice indicado
    if (tablero.estadoPartida === "CeroCartasLevantadas") {
      //cambia el estado según la condición
      tablero.estadoPartida = "UnaCartaLevantada";
      tablero.indiceCartaVolteadaA = indice;
    } else if (tablero.estadoPartida === "UnaCartaLevantada") {
      tablero.estadoPartida = "DosCartasLevantadas";
      tablero.indiceCartaVolteadaB = indice;
    }
  }

  const cartasVolteadas = tablero.cartas.filter((c: Carta) => c.estaVuelta); //filtramos que cumplan la condición estaVuelta
  if (
    cartasVolteadas.length === 2 &&
    tablero.indiceCartaVolteadaA != undefined &&
    tablero.indiceCartaVolteadaB != undefined
  ) {
    if (
      sonPareja(
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB,
        tablero
      )
    ) {
      parejaEncontrada(
        tablero,
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB
      );
    } else {
      parejaNoEncontrada(
        tablero,
        tablero.indiceCartaVolteadaA,
        tablero.indiceCartaVolteadaB
      );
    }
    tablero.estadoPartida = "CeroCartasLevantadas"; //tanto si se encuentra la pareja como si no, el estado siempre es CeroCartasLevantadas(estado inicial) para continuar el juego.
  }

  // comprobar si hay dos volteadas, si hay dos volteadas mirar si son pareja. Si son pareja llamar a pareja encontrada, sino a parejaNoEncontrada
};
/*
        Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
      */
export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  const primeraCarta = tablero.cartas[indiceA];
  const segundaCarta = tablero.cartas[indiceB];

  return primeraCarta.idCarta === segundaCarta.idCarta; //para que sean pareja, ambos índices han de ser el mismo
};

/*
        Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
      */
const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true; //asignar valor true a cada indice
  tablero.cartas[indiceB].encontrada = true;
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  const terminada = esPartidaCompleta(tablero); //llama a la función partida completa
  if (terminada) {
    //en caso de que la aprtida haya terminado:
    mostrarMensajeFinDePartida("Fin de Partida");
    tablero.estadoPartida = "PartidaCompleta";
  } else {
    tablero.estadoPartida = "CeroCartasLevantadas"; //en caso de que no se haya terminado y no sean apreja, las cartas vuelven "bocabajo"
    tablero.indiceCartaVolteadaA = undefined;

    tablero.indiceCartaVolteadaB = undefined;
  }
};

/*
        Aquí asumimos que no son pareja y las volvemos a poner boca abajo
      */
const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].estaVuelta = false; //se asigna el valor false para que se oculten
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined; //se ponene como indefinidos porque se resetean, no tienen niguna selección
  tablero.indiceCartaVolteadaB = undefined;
};

/*
        Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
      */
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  const cartas = tablero.cartas;
  const todasEncontradas = cartas.every((cartas) => cartas.encontrada); //si todas las cartas están encontradas
  return todasEncontradas; //devuelve todas la partida está completa
};

/*
      Iniciar partida
      */

export const iniciaPartida = (tablero: Tablero): void => {
  const cartas = tablero.cartas;
  tablero.estadoPartida = "CeroCartasLevantadas";
  barajarCartas(cartas);
};

function mostrarMensajeFinDePartida(mensaje: string) {
  const estadoJuegoDiv = document.getElementById("estado-partida");
  if (
    mensaje &&
    estadoJuegoDiv !== null &&
    estadoJuegoDiv !== undefined &&
    estadoJuegoDiv instanceof HTMLDivElement
  ) {
    estadoJuegoDiv.textContent = mensaje;
  }
}
