//función anónima asignada a una constante para calcular el IVA 
const calcularIVA = function (monto, tasaIva = 0.13) {
  return monto * tasaIva;
};

// función para procesar y leer los datos del cliente
const procesarCliente = function (codigo, nombre, edad, montoTotal) {
//aqui es donde se calcula el IVA usando la función anónima
const ivaCalculado = calcularIVA(montoTotal);
const totalConIVA = montoTotal + ivaCalculado;
//Retornamos un objeto con todos los datos procesados
    return {
        codigo,
        nombre,
        edad,
        montoBase: montoTotal, //aqui usamos el nombre del objeto y con los : indicamos su valor
        iva: ivaCalculado,
        montoFinal: totalConIVA,
    
    // Método para imprimir la información resumida
    mostrarResumen: function () {
        console.log("=== RESUMEN DEL CLIENTE ===");
        console.log(`Código:      ${this.codigo}`);
        console.log(`Nombre:      ${this.nombre}`);
        console.log(`Edad:        ${this.edad} años`);
        console.log(`Monto Base:  $${this.montoBase.toFixed(2)}`); //usamos este metodo para formatear los valores
        console.log(`IVA (13%):   $${this.iva.toFixed(2)}`);
        console.log(`Total Final: $${this.montoFinal.toFixed(2)}`);
        console.log("===========================\n");
    }
};
};

// probamos la función pasando los datos requeridos
const cliente1 = procesarCliente("CLI-001", "María López", 28, 150.00);
//y mostramos la salida en consola
cliente1.mostrarResumen();