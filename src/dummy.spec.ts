import { validarFormatoIban, validarIban } from "./motor";

describe("motor", () => {
  it.each`
    iban                              | esValido
    ${"ES8937040044053201300000"}     | ${true}
    ${"ES89370400440532013000"}       | ${false}
    ${"ES89 3704 0044 05 3201300000"} | ${true}
    ${"ES89-3704-0044-05-3201300000"} | ${true}
    ${"ES89 3704-0044-053201300000"}  | ${false}
  `(
    "validarFormatoIban: debería verificar si el formato de IBAN introducido es correcto",
    ({ iban, esValido }) => {
      // Act
      const result = validarFormatoIban(iban);

      // Assert
      expect(result).toBe(esValido);
    }
  );

  it.each`
    iban                        | esValido
    ${"NL91ABNA0417164300"}     | ${true}
    ${"ES89370400440532013000"} | ${false}
  `(
    "validarIban: debería verificar si el IBAN introducido es válido",
    ({ iban, esValido }) => {
      // Act
      const result = validarIban(iban);

      // Assert
      expect(result).toBe(esValido);
    }
  );
});
