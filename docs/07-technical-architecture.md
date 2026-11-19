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

## Estructura de código propuesta (pendiente de aprobación)
- `src/app/`: configuración de aplicación y rutas.
- `src/components/layout/` y `src/components/ui/`: componentes compartidos.
- `src/features/`: herramientas independientes (`intro-rol`, `como-jugar`, `dados`, `reglas`, `test-vocacional`).
- `src/pages/`: páginas Inicio y Acerca de.
- `src/data/`: catálogo de herramientas y datos transversales.
- `src/styles/`: estilos globales de Tailwind.
- Crear directorios según necesidad, evitando estructura vacía prematura.
