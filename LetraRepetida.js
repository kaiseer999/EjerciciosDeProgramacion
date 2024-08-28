function EliminarLetrasRepetidas(palabra) {
    // Convertir la palabra a minúsculas para una comparación insensible a mayúsculas
    palabra = palabra.toLowerCase();

    // Crear un objeto para contar las ocurrencias de cada letra
    let conteoLetras = {};

    // Recorrer cada letra en la palabra
    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        
        // Contar cada letra
        if (conteoLetras[letra]) {
            conteoLetras[letra]++;
        } else {
            conteoLetras[letra] = 1;
        }
    }

    // Crear un array para las letras únicas
    let letrasUnicas = [];

    // Añadir las letras que sólo aparecen una vez
    for (let letra in conteoLetras) {
        if (conteoLetras[letra] === 1) {
            letrasUnicas.push(letra);
        }
    }

    // Reconstruir la palabra sin letras repetidas
    let resultado = '';
    for (let i = 0; i < palabra.length; i++) {
        if (letrasUnicas.includes(palabra[i])) {
            resultado += palabra[i];
        }
    }

    console.log("Palabra sin letras repetidas:", resultado);
}

// Ejemplo de uso
EliminarLetrasRepetidas("Bogota");
