/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function imprimirPrimosHasta(n) {
    for (let itera = 2; itera <= n; itera++) {
        let esPrimo = true; // Asumimos que itera es primo inicialmente

        // Verificamos divisibilidad desde 2 hasta itera/2
        for (let i = 2; i <= itera / 2; i++) {
            if (itera % i === 0) {
                esPrimo = false; // No es primo si es divisible por i
                break; // Salimos del bucle ya que ya sabemos que no es primo
            }
        }

        if (esPrimo) {
            console.log(itera + ' es un número primo');
        }
    }
}

imprimirPrimosHasta(100);
