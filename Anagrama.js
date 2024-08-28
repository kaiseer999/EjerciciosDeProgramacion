/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function Anagrama(palabra1, palabra2) {
    // Si las palabras son iguales, no son anagramas
    if (palabra1 === palabra2) {
        return false;
    }

    // Si las palabras tienen longitudes diferentes, no pueden ser anagramas
    if (palabra1.length !== palabra2.length) {
        return false;
    }

    // Convertir palabra2 en un array de caracteres
    let arr2 = palabra2.split('');

    // Recorrer cada letra de la primera palabra
    for (let i = 0; i < palabra1.length; i++) {
        let letra = palabra1[i];
        let found = false;

        // Buscar esa letra en el array de la segunda palabra
        for (let j = 0; j < arr2.length; j++) {
            if (letra === arr2[j]) {
                arr2.splice(j, 1); // Eliminar la letra encontrada
                found = true;
                break;
            }
        }

        // Si la letra no se encuentra, no son anagramas
        if (!found) {
            return false;
        }
    }

    // Si todas las letras fueron encontradas, son anagramas
    return true;
}

// Ejemplo de uso
console.log(Anagrama('perro', 'rrope')); // true
console.log(Anagrama('perro', 'perro')); // false
console.log(Anagrama('amor', 'roma'));   // true
console.log(Anagrama('sol', 'luz'));     // false
