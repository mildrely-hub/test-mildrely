// Archivo: operaciones.test.js

// 1. Traemos las funciones de tu otro archivo
const { sumar, restar, multiplicar, dividir } = require('./operaciones');

// 2. Iniciamos el grupo de pruebas
describe('Pruebas de Operaciones Matemáticas', () => {

    test('Suma: 10 + 20 debe ser 30', () => {
        expect(sumar(10, 20)).toBe(30);
    });

    test('Resta: 10 - 5 debe ser 5', () => {
        expect(restar(10, 5)).toBe(5);
    });

    test('Multiplicación: 2 * 3 debe ser 6', () => {
        expect(multiplicar(2, 3)).toBe(6);
    });

    test('División: 10 / 2 debe ser 5', () => {
        expect(dividir(10, 2)).toBe(5);
    });

});