import { EstadoPartida, partida } from './model';
import * as modelo from './model';
import {
    obtenerEstadoPartida,
    obtenerCarta,
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
    describe('sumarPuntos', () => {
        it("debería devolver el valor de la carta obtenida en obtenerCarta()", () => {
            const valor = 0;
            const resultadoEsperado = valor+2;
                vi.spyOn(modelo, 'partida', "get").mockReturnValue({
                    puntuacion: 4
                })
            expect(resultadoEsperado).toBe(2);
        })
    })
})

