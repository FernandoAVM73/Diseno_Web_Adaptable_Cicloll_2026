//Funcion para pedirle los numeros al usuario
function agregarNumeros(numerosValidos, textoEntrada) {
    let partes = textoEntrada.split(',');
    let cantidadAgregados = 0;

    for (let i = 0; i < partes.length; i++) {
        let num = parseFloat(partes[i].trim()); //trim quita espacios extras
        
        //aqui valido si es numero y no otro tipo caracter
        if (!isNaN(num)) {
        numerosValidos.push(num);
        cantidadAgregados++;
        }
    }

    if (cantidadAgregados > 0) {
        console.log(`\nSe agregaron ${cantidadAgregados} números.`);
    } else {
        console.log("\nNo se ingresó ningún número válido.");
    }
}

//se muestra los números guardados en el array
function mostrarNumeros(numerosValidos) {
    if (numerosValidos.length === 0) {
        console.log("\nVacío. Agregue números primero.");
    } else {
        console.log("\nNúmeros guardados:", numerosValidos.join(", "));
    }
}

module.exports = {
    agregarNumeros,
    mostrarNumeros
};
