export interface Estudiante {
    readonly id: string;
    nombre: string;
    edad: number;
    email: string;
    becado?: boolean; // El signo ? significa que es opcional
}

export interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
}