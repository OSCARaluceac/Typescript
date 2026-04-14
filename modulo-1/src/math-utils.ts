/**
 * Calcula la media aritmética de un array de números.
 * @returns number o null si el array está vacío.
 */
export const calcularMedia = (numeros: number[]): number | null => {
    if (numeros.length === 0) return null;
    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    return suma / numeros.length;
};

/**
 * Calcula la mediana de un conjunto de datos.
 */
export const calcularMediana = (numeros: number[]): number | null => {
    if (numeros.length === 0) return null;
    const ordenados = [...numeros].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 !== 0) {
        return ordenados[mitad];
    }
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
};

/**
 * Filtra valores que superan un límite establecido (Atípicos).
 */
export const filtrarAtipicos = (numeros: number[], limite: number): number[] => {
    return numeros.filter(num => num <= limite);
};