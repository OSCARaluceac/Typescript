import { RespuestaAPI } from '../domain/types/estudiante'; // Ajusta la ruta si es necesario

/**
 * Simulador de llamadas a API con Genéricos.
 * T representa el tipo de entidad que esperamos (Estudiante, Asignatura, etc.)
 */
export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
    console.log(`[SISTEMA]: Accediendo al punto de enlace: ${endpoint}...`);

    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulamos una respuesta genérica. 
            // En un caso real, aquí iría un fetch()
            const respuesta: RespuestaAPI<any> = {
                codigoEstado: 200,
                exito: true,
                datos: {} as T // Forzamos el tipo para la simulación
            };
            resolve(respuesta);
        }, 1000);
    });
}