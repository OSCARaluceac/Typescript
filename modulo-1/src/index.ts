import { calcularMedia, calcularMediana, filtrarAtipicos } from './math-utils';

const datosMision = [10, 20, 15, 100, 25]; // El 100 es un valor atípico
const limiteSeguridad = 50;

console.log("--- Reporte Táctico de Datos ---");
console.log(`Media: ${calcularMedia(datosMision)}`);
console.log(`Mediana: ${calcularMediana(datosMision)}`);
console.log(`Datos filtrados (sin atípicos): ${filtrarAtipicos(datosMision, limiteSeguridad)}`);

// Prueba de seguridad con array vacío
console.log(`Prueba vacío (Media): ${calcularMedia([])}`);