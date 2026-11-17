# Principios de arquitectura

**Estado: principios de trabajo; detalles técnicos pendientes de aprobación.**

- Diseñar herramientas independientes que puedan evolucionar sin afectar a las demás.
- Mantener abierta la posibilidad de incorporar backend, cuentas y sincronización.
- Considerar explícitamente diferencias entre reglas D&D 5e 2014 y 2024.
- Evitar acoplar el dominio a una única edición o, innecesariamente, a un único sistema.
- Separar lógica de negocio, presentación y persistencia.
- Minimizar barreras de acceso y priorizar el uso desde navegador.
- Explicar al usuario los riesgos de perder datos guardados localmente.

## Propuestas por validar
- Persistencia inicial en localStorage o IndexedDB.
- Exportación/importación para respaldar datos y permitir portabilidad.
- Abstracción de almacenamiento para facilitar una API remota futura.
- Capacidades PWA/offline cuando agreguen valor, sin exigir instalación.

No se ha elegido framework, lenguaje de backend ni base de datos.
