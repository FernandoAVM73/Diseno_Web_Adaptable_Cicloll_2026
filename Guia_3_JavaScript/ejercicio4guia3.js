//Variables iniciales
let entero = 42;
let decimal = 19.99;
let texto = "Tienda Tecnológica";

//Arreglo Principal con las 3 variables
let arregloPrincipal = [entero, decimal, texto];

//Objeto Producto
let producto = {
    //las 5 Propiedades
    id: "PROD-101",
    nombre: "Laptop Gaming",
    precio: 850.50,
    enStock: true,
    categoria: "Electrónica",
    // Función que retorna un mensaje
    obtenerMensaje: function () {
        return `El producto '${this.nombre}' cuesta $${this.precio.toFixed(2)}`;
    },
    //Función que retorna un objeto "Proveedor"
    obtenerProveedor: function () {
        return {
        idProveedor: "PROV-55",
        nombreEmpresa: "TechDistribuidora S.A.",
        telefono: "2255-8800"
        };
    },
    //Arreglo interno con un arreglo de enteros de 7 posiciones
    ventasSemanales: [12, 15, 8, 20, 25, 18, 30]
};

// 4. Agregar el objeto Producto al arreglo principal
arregloPrincipal.push(producto);

//prueva en consola
console.log("=== IMPRESIÓN DE ELEMENTOS DEL ARRAY EXTERNO ===");
// Recorremos e imprimimos cada elemento del arreglo principal
arregloPrincipal.forEach((elemento, indice) => {
    console.log(`\n--- Elemento en índice [${indice}] ---`);
    console.log(elemento);
});

console.log("\n================================================");
console.log("=== ÚLTIMA POSICIÓN DEL ARRAY INTERNO DE ENTEROS ===");
// Accedemos al arreglo interno 'dentro del objeto Producto
const arrayEnteros = arregloPrincipal[3].ventasSemanales;
//última posición en un arreglo de 7 elementos
const ultimaPosicion = arrayEnteros[arrayEnteros.length - 1];
console.log(`El arreglo de enteros completo es: [${arrayEnteros.join(", ")}]`);//metodo join para organizar la impresion
console.log(`El valor en la última posición (índice ${arrayEnteros.length - 1}) es: ${ultimaPosicion}`);
