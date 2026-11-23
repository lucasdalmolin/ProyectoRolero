# Arquitectura técnica

**Estado: stack frontend aprobado; estructura de carpetas propuesta pendiente de validación.**

## Requisitos a evaluar
- Aplicación web responsive y accesible desde navegador.
- Herramientas utilizables sin login.
- Posible persistencia local y exportación/importación.
- Backend y autenticación opcionales en etapas posteriores.
- Separación de reglas de negocio, contenido y almacenamiento.
- Versionado de reglas D&D 2014/2024.

## Decisiones pendientes
- Framework y herramientas de frontend.
- Estrategia de datos y persistencia local.
- Formatos de exportación.
- Hosting, CI/CD, testing y observabilidad.
- Condiciones para introducir backend y base de datos.

## Stack frontend aprobado (2026-11-19)
- React + TypeScript + Vite.
- React Router para navegación.
- Tailwind CSS **aprobado** para estilos y diseño responsive, priorizando iteración funcional y trabajo asistido por IA. CSS Modules no es la opción principal.
- Priorizar funcionalidad y componentes reutilizables; estética definitiva en iteraciones posteriores.
- Sin backend ni base de datos para el primer incremento; reconsiderar cuando exista necesidad concreta.

No seleccionar tecnologías adicionales sin una necesidad del MVP.

## Estructura de código aprobada (evolutiva)
- `src/app/`: configuración de aplicación y rutas.
- `src/components/layout/` y `src/components/ui/`: componentes compartidos.
- `src/features/`: herramientas independientes (`intro-rol`, `como-jugar`, `dados`, `reglas`, `test-vocacional`).
- `src/pages/`: páginas Inicio y Acerca de.
- `src/data/`: catálogo de herramientas y datos transversales.
- `src/styles/`: estilos globales de Tailwind.
- Crear directorios según necesidad, evitando estructura vacía prematura.

## Escalabilidad y evolución (criterios de arquitectura)
- La organización por funcionalidades fue aprobada. Cada herramienta mantiene UI, estado y lógica específica cerca de sí misma, sin importar directamente detalles internos de otras herramientas.
- Para futuras reglas 2014/2024, separar contenido y modelos del sistema/edición de los componentes de presentación. Identificar sistema, edición y fuente en los datos; evitar condiciones de edición dispersas por la UI. El modelo exacto sigue pendiente.
- Cuando existan reglas/modelos compartidos entre herramientas, evaluar `src/domain/` (por ejemplo `rules/`, `characters/`); no crearlo vacío por anticipado.
- Si se agrega backend, evaluar `src/services/` o adaptadores de API para aislar llamadas HTTP y contratos. Backend Java/Spring Boot y base de datos son posibilidades posteriores, no componentes del primer incremento.
- La estructura futura podría separar `frontend/` y `backend/` en un mismo repositorio, pero **no es obligatorio ni está decidido aún**; mantener `src/` en raíz mientras el proyecto sea frontend-only.
- Escalabilidad también requiere pruebas, contratos claros, bajo acoplamiento y migraciones de datos cuando correspondan; carpetas por sí solas no la garantizan.

## Alcance aprobado de compatibilidad futura (2026-11-20)
- MVP exclusivamente con reglas D&D 5e 2014. Diseñar límites claros entre contenido, dominio e interfaz, y etiquetar contenido dependiente de sistema/edición.
- No implementar aún un motor multirreglas, adaptadores para Pathfinder, selector 2014/2024 ni estructuras complejas hipotéticas.
- El soporte futuro de 2024 u otros sistemas requerirá trabajo adicional y posiblemente refactorización; arquitectura extensible no implica compatibilidad automática.
- Aplicar YAGNI: construir capacidades reales del MVP y extender mediante necesidades concretas.

## Persistencia y contenido inicial — aprobado (2026-11-20)
- Para el MVP, contenido local versionado en Git; no se requiere backend ni base de datos.
- Datos estructurados (catálogo, clases, conceptos, trasfondos, preguntas y opciones del test) en JSON o módulos TypeScript tipados según necesidad.
- Interacciones y cálculos en funciones TypeScript, separados de los datos y de la presentación.
- Guías educativas en componentes React con separación de contenido cuando aporte claridad; no imponer un único formato para todo.
- Aislar el acceso a datos detrás de funciones o módulos para facilitar sustitución futura por API, sin construir hoy una capa de infraestructura compleja.
- La migración futura a backend no será automática: requerirá contratos, gestión de errores y posibles adaptaciones.

## Prioridad de implementación y contenido (2026-11-23) — acordado
- Priorizar funcionalidad y presentación sencilla de la información sobre la estética detallada.
- Construir navegación, componentes, interacciones y diseño responsive antes de completar el contenido editorial.
- Utilizar contenido provisional claramente identificado y fácil de reemplazar; el responsable del proyecto investigará, seleccionará y revisará el contenido definitivo.
- Mantener contenido separado de los componentes y de la lógica cuando sea práctico, de modo que actualizar textos/preguntas no requiera reescribir la interfaz.
- Mantener un mínimo de accesibilidad y consistencia visual desde el inicio; no posponer correcciones funcionales de UX bajo el rótulo de estética.

## Identificación visible de despliegues (2026-11-23)
- El pie de página muestra versión semántica desde `package.json` (actualmente `v0.1.0`) y un ID de compilación en UTC inyectado por Vite.
- El ID cambia en cada build y permite distinguir despliegues sin modificar manualmente el número de versión.
- La versión semántica se incrementa deliberadamente cuando se publica una nueva versión funcional; no por cada commit.
- La visualización del build permite diagnosticar caché o despliegues pendientes, pero no demuestra por sí sola que Vercel haya publicado correctamente; verificar estado del deployment cuando haya dudas.
