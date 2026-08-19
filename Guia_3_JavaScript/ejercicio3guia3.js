//Primero hacemos el arreglo de String con 10 nombres iniciales
let nombres = [
    "Carlos",
    "Ana",
    "Beatriz",
    "David",
    "Elena",
    "Fernando",
    "Gabriela",
    "Hugo",
    "Isabel",
    "Jorge"
];

console.log("1. Arreglo original (10 elementos):");
console.log(nombres);
console.log("------------------------------------------");
//"Rosa" en la primera posición 
nombres.unshift("Rosa");
//"Pepe" para la última posición
nombres.push("Pepe");
//"Desarrollo" después del elemento "Rosa" osea en la posición 1
nombres.splice(1, 0, "Desarrollo");

console.log("2. Arreglo modificado (con Rosa, Desarrollo y Pepe):");
console.log(nombres);
console.log("------------------------------------------");

//Esta es la copia del arreglo para no modificar el original
let copiaNombres = [...nombres];
//ordenamos la copia de forma descendente
copiaNombres.sort((a, b) => b.localeCompare(a));
//Se imprime el array luego de haberlo ordenado de forma descendente
console.log("3. Copia del arreglo ordenada de forma descendente (Z-A):");
console.log(copiaNombres);
