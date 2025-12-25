// Archivo: operaciones.js

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) return "Error";
    return a / b;
}

// Esto es vital: Exportamos las funciones para poder usarlas en otro lado
module.exports = { sumar, restar, multiplicar, dividir };