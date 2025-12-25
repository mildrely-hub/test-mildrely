
function esPrimo(numero) {
    //Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }
    
    //Buscamos divisores desde el 2 hacia arriba
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            // Si encontramos un divisor, NO es primo
            return false;
        }
    }
    
    //Si terminó el bucle y no encontró divisores, ES primo
    return true;
}

module.exports = esPrimo;