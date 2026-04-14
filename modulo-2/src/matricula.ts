interface MatriculaActiva {
    tipo: "ACTIVA"; // El discriminante
    asignaturas: string[];
}

interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
}

interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}

// Unimos los tres estados en uno solo
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;