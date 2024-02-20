
import { validarNif } from "./validarNIF";

describe("El NIF es válido", () => {
    it.each([
        [12365489, "L", false],
        [56987140, "B", false],
    ])
        ("El NIF %s%s es vaĺido: %s", (numero, letra, resultadoEsperado) => {
            /*act*/
            const resultado = validarNif(numero, letra)
            /*assert*/
            expect(resultado).toBe(resultadoEsperado);
        });
    it("Lanza una excepción si el NIF No tiene 8 cifras", () => {
        const numero = 1234567;
        const letra = "z";

        expect(() => validarNif(numero, letra)).toThrow("El número debe tener 8 carácteres y la letra solo 1");
    });

});