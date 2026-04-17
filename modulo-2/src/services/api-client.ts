import { RespuestaAPI } from '../domain/types/api-types';

export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const respuesta: RespuestaAPI<T> = {
                codigoEstado: 200,
                exito: true,
                datos: {} as T,
                mensaje: "Operación completada" // 👈 Ahora TS debería reconocerlo
            };
            resolve(respuesta);
        }, 500);
    });
}