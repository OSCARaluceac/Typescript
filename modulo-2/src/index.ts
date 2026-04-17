// 1. Corregimos las rutas de importación hacia las nuevas carpetas
import { EstadoMatricula } from './domain/types/matricula';
import { Estudiante } from './domain/types/estudiante';
import { obtenerRecurso } from './services/api-client';

// 2. Función de reporte 
function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "ACTIVA":
            return `El estudiante tiene ${estado.asignaturas.length} asignaturas activas.`;
        case "SUSPENDIDA":
            return `Atención: Matrícula suspendida por: ${estado.motivo}`;
        case "FINALIZADA":
            return `Misión cumplida. Nota media: ${estado.notaMedia}`;
    }
}

// 3. Nueva función asíncrona para probar los Genéricos
async function ejecutarProtocolo() {
    console.log("--- Iniciando Sincronización con el Gremio ---");

   
    const miEstado: EstadoMatricula = { tipo: "ACTIVA", asignaturas: ["TS-101", "React-202"] };
    console.log(generarReporte(miEstado));

    // Probamos el nuevo Cliente Genérico <T>
    const respuesta = await obtenerRecurso<Estudiante>('/api/estudiantes/v1');

    if (respuesta.exito) {
        console.log(`[SISTEMA]: Datos de estudiante vinculados correctamente.`);
        console.log(`[MENSAJE]: ${respuesta.mensaje}`);
    }
}

ejecutarProtocolo();