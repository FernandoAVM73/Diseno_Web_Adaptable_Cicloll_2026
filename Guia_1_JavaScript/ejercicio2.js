function procesarEstudiantes(estudiantes) {
    let aprobados = 0;
    let reprobados = 0;
    let sumaNotas = 0;

    console.log("--- RESULTADOS INDIVIDUALES ---");
    
    estudiantes.forEach(estudiante => {
        let estado = estudiante.nota >= 7.0 ? "Aprobado" : "Reprobado";
        
        if (estudiante.nota >= 7.0) {
            aprobados++;
        } else {
            reprobados++;
        }
        
        sumaNotas += estudiante.nota;
        console.log(`${estudiante.nombre}: ${estudiante.nota.toFixed(2)} - Status: ${estado}`);
    });

    let promedio = estudiantes.length > 0 ? (sumaNotas / estudiantes.length) : 0;

    console.log("\n--- RESUMEN GENERAL ---");
    console.log(`Total de estudiantes: ${estudiantes.length}`);
    console.log(`Aprobados: ${aprobados}`);
    console.log(`Reprobados: ${reprobados}`);
    console.log(`Promedio general: ${promedio.toFixed(2)}`);
}

//ejemplo
const grupo = [
    { nombre: "Carlos Martínez", nota: 8.5 },
    { nombre: "Ana Gómez", nota: 6.2 },
    { nombre: "Luis Rodríguez", nota: 7.0 },
    { nombre: "María Hernández", nota: 5.5 }
];

procesarEstudiantes(grupo);
