import { EstadoMatricula } from './matricula';

function generarReporte(estado: EstadoMatricula): string {
    // TypeScript nos obliga a verificar el "tipo" antes de dejarnos usar los datos
    switch (estado.tipo) {
        case "ACTIVA":
            return `El estudiante tiene ${estado.asignaturas.length} asignaturas activas.`;
        case "SUSPENDIDA":
            return `Atención: Matrícula suspendida por: ${estado.motivo}`;
        case "FINALIZADA":
            return `Misión cumplida. Nota media: ${estado.notaMedia}`;
    }
}

const miEstado: EstadoMatricula = { tipo: "ACTIVA", asignaturas: ["TS-101", "React-202"] };
console.log(generarReporte(miEstado)); 