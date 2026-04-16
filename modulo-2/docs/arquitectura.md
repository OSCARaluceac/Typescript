# Reporte de Arquitectura - Módulo 2

## Decisiones Técnicas
1. **Interfaces Estrictas:** Se han definido contratos para Estudiante y Matrícula para asegurar la integridad de los datos.
2. **Uniones Discriminadas:** Se utiliza el patrón `EstadoMatricula` para manejar los diferentes estados de un alumno sin errores de nulidad.
3. **Generics (<T>):** Se ha implementado un cliente de API genérico que permite la reutilización de código, evitando el uso de `any` y manteniendo la seguridad de tipos en toda la aplicación.