# Modelo de dominio

**Estado: pendiente.** No es todavía un esquema de base de datos.

## Tres categorías a separar
1. **Contenido de Rolero:** explicaciones, guías, tutoriales y textos propios.
2. **Contenido del sistema de rol:** reglas, clases, especies, trasfondos, equipo, hechizos, versiones/ediciones y fuentes autorizadas.
3. **Datos del usuario:** personajes creados, selecciones y preferencias.

## Preguntas de diseño
- ¿Cómo representar reglas compartidas y diferencias entre D&D 2014 y 2024?
- ¿Cómo identificar el sistema, edición y fuente de cada opción?
- ¿Qué información mínima requiere una ficha de personaje inicial?
- ¿Cómo versionar datos exportados para permitir importación futura?

La definición de entidades y relaciones dependerá del alcance aprobado del MVP y del contenido legalmente utilizable.

## Propuesta para validar — modelo de sistemas y ediciones (2026-11-20)
- Separar `GameSystem` (ej. D&D), `Ruleset` (sistema + edición, ej. 5e 2014 y 5e 2024) y `ContentEntry` (conceptos, clases, reglas, trasfondos).
- Identificadores estables y no dependientes del texto visible, por ejemplo `druid`; las variantes de contenido pueden depender del ruleset.
- Asociar fuente y licencia/permiso al contenido antes de publicarlo. Separar guías originales de Rolero de material derivado o reproducido de terceros.
- Para MVP, considerar contenido local tipado y sin base de datos, con acceso mediante funciones de consulta; esquema exacto y alcance del soporte 2024 pendientes de aprobación.
- No asumir que todas las reglas o clases tienen una correspondencia uno-a-uno entre ediciones o sistemas. Mantener el modelo extensible sin crear abstracciones innecesarias.

## Decisión aprobada — alcance de ediciones para MVP (2026-11-20)
- **D&D 5e 2014 es la única edición de reglas que se implementará en el MVP.**
- Registrar sistema y edición en los datos cuando corresponda, con identificadores estables y fuentes/licencias, sin construir un motor genérico de múltiples sistemas por anticipado.
- Separar contenido y reglas de los componentes de UI para facilitar variantes futuras.
- D&D 2024, Pathfinder y otros sistemas son posibilidades posteriores; no comprometer implementación, paridad ni selector de ediciones ahora.
- La experiencia introductoria se enfoca en conceptos básicos y no debe sobrecargarse con diferencias de edición.
