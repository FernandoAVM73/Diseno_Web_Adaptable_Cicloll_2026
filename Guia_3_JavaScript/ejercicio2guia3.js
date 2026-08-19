//funciones anónimas 
const areaRectangulo = function (base, altura) {
  return base * altura;
};

const areaTriangulo = function (base, altura) {
  return (base * altura) / 2;
};

const areaRombo = function (diagonalMayor, diagonalMenor) {
  return (diagonalMayor * diagonalMenor) / 2;
};

//Objeto que agrupa las funciones de cálculo
const calculadorasArea = {
    rectangulo: areaRectangulo,
    triangulo: areaTriangulo,
    rombo: areaRombo
};

//Función principal de primera clase para calcular y formatear la salida
const calcularAreaPoligono = function (tipoPoligono, valor1, valor2) {
//aca buscamos la función correspondiente dentro de nuestro objeto
const funcionCalculo = calculadorasArea[tipoPoligono.toLowerCase()];//el inverso de toUpperCase visto en clase

//se verifica si la figura ingresada existe
if (!funcionCalculo) {
    console.log(`Error: El polígono "${tipoPoligono}" no es válido.`);
    return;
}

//ejecutamos la función obtenida
const resultado = funcionCalculo(valor1, valor2);

//Mostramos el resultado
console.log(`Área del ${tipoPoligono}: ${resultado.toFixed(2)} unidades²`);
    return resultado;
};

console.log("=== CÁLCULO DE ÁREAS DE POLÍGONOS ===\n");
calcularAreaPoligono("Rectangulo", 10, 5);
calcularAreaPoligono("Triangulo", 8, 6);
calcularAreaPoligono("Rombo", 12, 8);