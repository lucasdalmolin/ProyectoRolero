# Arquitectura técnica

**Estado: stack frontend base aprobado; decisión de estilos pendiente.**

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
- CSS Modules fue la opción inicial, pero se está evaluando Tailwind CSS como alternativa por rapidez de iteración y trabajo asistido por IA; **no dar Tailwind por aprobado todavía**.
- Priorizar funcionalidad y componentes reutilizables; estética definitiva en iteraciones posteriores.
- Sin backend ni base de datos para el primer incremento; reconsiderar cuando exista necesidad concreta.

No seleccionar tecnologías adicionales sin una necesidad del MVP.
