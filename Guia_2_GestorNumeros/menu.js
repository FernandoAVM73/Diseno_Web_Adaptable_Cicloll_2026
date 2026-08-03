const prompt = require('prompt-sync')();
const operaciones = require('./operaciones');
const utils = require('./utils');

function iniciarPrograma() {
    let numerosArray = [];
    let opcion = '';

    do {
        console.log("\n==============================");
        console.log("     GESTOR DE NÚMEROS  ");
        console.log("==============================");
        console.log("1. Agregar números");
        console.log("2. Mostrar números");
        console.log("3. Suma total");
        console.log("4. Multiplicación total");
        console.log("5. División total");
        console.log("6. Elevar al cuadrado");
        console.log("7. Salir");
        console.log("==============================");

        opcion = prompt("Seleccione una opción: ");

        switch (opcion) {
        case '1':
            let entrada = prompt("Ingrese los números separados por comas (ej: 1, 7, 5): ");
            utils.agregarNumeros(numerosArray, entrada);
            break;

        case '2':
            utils.mostrarNumeros(numerosArray);
            break;

        case '3':
            if (numerosArray.length === 0) {
            console.log("\nVacío.");
            } else {
            console.log("\nLa suma total es:", operaciones.sumar(numerosArray));
            }
            break;

        case '4':
            if (numerosArray.length === 0) {
            console.log("\nVacío.");
            } else {
            console.log("\nLa multiplicación total es:", operaciones.multiplicar(numerosArray));
            }
            break;

        case '5':
            if (numerosArray.length === 0) {
            console.log("\nVacío.");
            } else {
            console.log("\nLa división total es:", operaciones.dividir(numerosArray));
            }
            break;

        case '6':
            if (numerosArray.length === 0) {
            console.log("\nVacío.");
            } else {
            let cuadrados = operaciones.elevarAlCuadrado(numerosArray);
            console.log("\nNuevo array elevado al cuadrado:", cuadrados.join(", "));
            }
            break;

        case '7':
            console.log("\n¡Hasta la próxima!\n");
            break;

        default:
            console.log("\nOpción no válida. Intente de nuevo.");
        }

    } while (opcion !== '7');
}

module.exports = { iniciarPrograma };