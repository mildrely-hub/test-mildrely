const esPrimo = require('./primos');

describe('Pruebas de Números Primos', () => {

    test('El número 7 debe ser primo (true)', () => {
        expect(esPrimo(7)).toBe(true);
    });

    test('El número 4 NO debe ser primo (false)', () => {
        expect(esPrimo(4)).toBe(false);
    });

    test('El número 13 debe ser primo (true)', () => {
        expect(esPrimo(13)).toBe(true);
    });

    test('El número 1 NO debe ser primo (false)', () => {
        expect(esPrimo(1)).toBe(false);
    });

});