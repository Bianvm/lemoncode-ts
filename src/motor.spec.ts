import { EstadoPartida, partida } from './model';
import {
    obtenerEstadoPartida,
    obtenerCarta,
    puntosPorCarta
} from './motor';

import { describe, vi } from 'vitest';
describe('./src/motor.ts', () => {
    describe('obtenerEstadoPartida', () => {
        it("debería devolver POR_DEBAJO_MAXIMO puntuación < 7.5", () => {
            const estadoEsperado: EstadoPartida = 'POR_DEBAJO_MAXIMO';
            vi.spyOn(partida, 'puntuacion', "get").mockReturnValue(1);
            const resultado = obtenerEstadoPartida()
            expect(resultado).toBe(estadoEsperado);
        })
    })
    describe('obtenerCarta', () => {
        it("debería sumar +2 si la carta >7", () => {
            const cartaAleatoria = 8;
            const resultadoEsperado = cartaAleatoria + 2;
            const resultado = obtenerCarta(cartaAleatoria);
            expect(resultadoEsperado).toBe(resultado);
        })
        it("debería delvolver el valor de la carta si valor <=7", () => {
            const cartaAleatoria = 6;
            const resultadoEsperado = cartaAleatoria;
            const resultado = obtenerCarta(cartaAleatoria);
            expect(resultadoEsperado).toBe(resultado);
        })
    })
    // debemos de haber creado una función que devuelva el valor de esa carta.
    describe('puntosPorCarta', () => {
        it("si numeroCarta>7 debería devolver 0.5.", () => {
            const numeroCarta = 12;
            const resultadoEsperado = 0.5;
            const resultado = puntosPorCarta(numeroCarta);
            expect(resultado).toBe(resultadoEsperado);

        })
        it("si numeroCarta<7, debería devolver valorCarta=numeroCarta", () => {
            const numeroCarta = 1;
            const resultadoEsperado = numeroCarta;
            const resultado = puntosPorCarta(numeroCarta);
            expect(resultado).toBe(resultadoEsperado);

        })
    }) //
})

