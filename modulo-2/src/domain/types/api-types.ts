export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    mensaje?: string; // 👈 Asegúrate de que tenga el signo '?'
}