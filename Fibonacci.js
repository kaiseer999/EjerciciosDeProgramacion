/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function Fibonacci(n) {
    let fib = [0, 1]; // Iniciar la serie con los dos primeros números

    for (let i = 2; i < n; i++) {
        // El siguiente número es la suma de los dos anteriores
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    // Imprimir los primeros n números de la sucesión de Fibonacci
    for (let i = 0; i < n; i++) {
        console.log(fib[i]);
    }
}

Fibonacci(50); // Imprime los primeros 50 números de Fibonacci
