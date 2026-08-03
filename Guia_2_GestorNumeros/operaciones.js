// 1. Suma todos los números del array
function sumar(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

// 2. Multiplicación de todos los números
function multiplicar(numeros) {
    if (numeros.length === 0) return 0;
    let producto = 1;
    for (let i = 0; i < numeros.length; i++) {
        producto *= numeros[i];
    }
    return producto;
}

// 3. Dividimos de izquierda a derecha 
function dividir(numeros) {
    if (numeros.length === 0) return 0;
    let resultado = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] === 0) {//aquí evito el error de la division entre 0
        return "Error: División entre cero no permitida.";
        }
        resultado /= numeros[i];
    }
    return resultado;
}

// 4. Elevar al cuadrado cada número generando un nuevo array
function elevarAlCuadrado(numeros) {
    let resultadoArray = [];
    for (let i = 0; i < numeros.length; i++) {
        resultadoArray.push(numeros[i] * numeros[i]);
    }
    return resultadoArray;
}

module.exports = {
    sumar,
    multiplicar,
    dividir,
    elevarAlCuadrado
};