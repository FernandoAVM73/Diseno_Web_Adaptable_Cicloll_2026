const estudiante = {
    carnet: "20260101",
    nombre: "Juan Pérez",
    edad: 21,
    facultad: {
        nombre: "Facultad de Ingeniería",
        escuela: {
            nombre: "Escuela de Ingeniería ITCA Fepade",
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

console.log(`Nombre del estudiante: ${estudiante.nombre}`);
console.log(`Municipio: ${estudiante.direccion.municipio}`);
console.log(`Facultad: ${estudiante.facultad.nombre}`);
console.log(`CUM del ciclo: ${estudiante.cumCiclo}`);

