//Función principal
function mostrarEmpleado(nombre, cargo, empleado, imprimir) {
    imprimir(nombre, cargo, empleado);
}

// Datos de ejemplo
const datosEmpleado = {
    id: 101,
    direccion: "Calle Principal #20",
    telefono: "2222-3333",
    salario: 1200.00
};

// Funcion que imprime los datos solicitados
function imprimirDatos(nom, car, emp) {
    console.log("--- DATOS DEL EMPLEADO ---");
    console.log(`Nombre: ${nom}`);
    console.log(`Cargo: ${car}`);
    console.log(`Lugar de trabajo: ${emp.direccion}`);
    console.log(`ID: ${emp.id}`);
    console.log(`Teléfono: ${emp.telefono}`);
    console.log(`Información adicional: Salario $${emp.salario}`);
}

// Llamada a la función
mostrarEmpleado(
    "Carlos Ramírez",
    "Desarrollador Senior",
    datosEmpleado,
    imprimirDatos
);
