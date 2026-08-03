//objeto Estudiante con propiedades anidadas
const estudiante = {
    carnet: "20260101",
    nombre: "Juan Pérez",
    edad: 21,
    facultad: {
        nombre: "Facultad de Ingeniería y Arquitectura",
        escuela: {
            nombre: "Escuela de Ingeniería en Computación",
            cantidadMaterias: 5
        }
    },
    cumCiclo: 8.4,
    direccion: {
        departamento: "San Salvador",
        municipio: "San Salvador Centro",
        ciudad: "San Salvador"
    }
};

//Impresion los datos solicitados
console.log(`Nombre del estudiante: ${estudiante.nombre}`);
console.log(`Municipio: ${estudiante.direccion.municipio}`);
console.log(`Facultad: ${estudiante.facultad.nombre}`);
console.log(`CUM del ciclo: ${estudiante.cumCiclo}`);