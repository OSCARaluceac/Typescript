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
// La <T> es un espacio reservado para el tipo de datos que recibiremos
export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;          // Aquí es donde la magia ocurre: se adaptará a lo que pidamos
    errores?: string[];
}