# UX y recorridos de usuario

**Estado:** etapa en curso; decisiones iniciales de catálogo y presentación aprobadas. El alcance funcional de las cinco herramientas fue aprobado en el punto de control 02.

## Principios aprobados
- Entrada gratuita desde navegador, sin cuenta ni instalación.
- Público principiante en Argentina; español rioplatense natural.
- Contenido breve, accesible y adaptable a dispositivos móviles.
- Herramientas con objetivos diferenciados y sin duplicación innecesaria.
- Exploración libre, sin un camino obligatorio. Los enlaces contextuales concretos se diseñarán en esta etapa.

## Decisiones de UX aprobadas — 2026-11-18
- Inspiración de Bárdica tanto en estética como en organización, con identidad propia para Rolero.
- Página inicial orientada a descubrir herramientas de forma directa, con introducción breve y sin recorrido obligatorio. Estructura exacta de la portada todavía por definir.
- **Catálogo agrupado por categorías desde el MVP**, para facilitar escalabilidad y evitar una lista indiscriminada.
- Agrupación inicial propuesta: **Aprendé a jugar** (Introducción al rol, Cómo funciona una partida, Guía de dados, Conceptos y reglas) y **Descubrí tu personaje** (Test Vocacional). Los nombres de categorías no son definitivos.
- Tarjetas simples con ícono, nombre y descripción corta; acceso claro a la herramienta.
- Íconos sencillos y con personalidad, potencialmente dibujados a mano por el creador. Pueden usarse íconos provisionales al principio.
- Estética sobria y minimalista: evitar decoraciones y animaciones excesivas; priorizar claridad, legibilidad y navegación.
- El esfuerzo principal de diseño y la personalidad más rica deben concentrarse **dentro de las herramientas**, sus interacciones y resultados.

- **Navegación principal aprobada:** únicamente **Inicio** y **Acerca de**. No hay sección separada «Herramientas»: el catálogo por categorías se muestra directamente en Inicio. El logo enlaza a Inicio y cada herramienta debe ofrecer regreso claro al catálogo.

- **Páginas independientes aprobadas:** cada herramienta se abre en su propia página desde una tarjeta del catálogo de Inicio. Comparten navegación y una forma clara de volver, pero cada una puede tener interacciones y presentación propias.

- **Aprendizaje progresivo e interactivo aprobado:** para las guías educativas, preferir secciones tipo acordeón, con títulos claros, texto breve y posibilidad de abrir, cerrar y saltear libremente.
- **Interacciones breves y significativas:** ejemplos de decisiones o demostraciones cuando faciliten la comprensión; no imponer un minijuego en cada sección.
- **Enlaces contextuales entre herramientas:** conectar conceptos relacionados (por ejemplo, la sección sobre dados en Introducción al rol con la Guía de dados), evitando repetir explicaciones extensas.
- **Motivación de diseño:** reducir la barrera de entrada causada por fuentes con exceso de texto, reglas y normas; permitir profundización gradual y a demanda.
- **Prototipo conceptual de Introducción al rol:** acordeón con «¿Qué es un juego de rol?», «¿Quiénes participan?», «¿Qué necesitás para jugar?», «¿Qué podés hacer en una partida?» y «¿Y los dados?». Títulos y contenidos sujetos a revisión.

- **Comportamiento de acordeones aprobado:** se pueden mantener varias secciones abiertas simultáneamente; cada sección se abre/cierra independientemente, sin cerrar las demás. Mantener títulos visibles y controles accesibles tanto en escritorio como en móvil.

- **Ambientación de ejemplos aprobada:** situaciones clásicas y reconocibles de fantasía medieval (guardias de castillo, tabernas, cofres de mazmorra, dragones, obstáculos de aventureros). Mantener ejemplos breves, interactivos y al servicio de un concepto, sin convertirlos en aventuras completas.

- **Estado inicial de los acordeones aprobado:** al ingresar a una guía educativa, la primera sección aparece abierta y las restantes cerradas. Luego cada persona puede abrir o cerrar cualquier sección de manera independiente, manteniendo varias abiertas simultáneamente.

- **«Cómo funciona una partida» — enfoque aprobado:** historia continua y breve, dividida en acordeones, siguiendo a un mismo personaje para facilitar la comprensión. Combinar observación de la partida con **una o dos decisiones interactivas** y consecuencias narrativas cortas que expliquen cómo responde el director de juego. Integrar las explicaciones sin bloques extensos de reglas; mantener libre el acceso a las secciones. Ejemplo posible: preparación, taberna, decisiones, tirada y cierre. El personaje es un recurso narrativo de la guía, no una mascota ni identidad oficial. Los detalles de la historia siguen pendientes.

- **«Guía de dados» — UX aprobada:** dado interactivo como protagonista; elegir d4, d6, d8, d10, d12, d20 o d100, ver una explicación breve de su uso y tirar para observar el resultado. Complementar con ejemplos cortos e interactivos de pruebas de habilidad, ataques frente a daño y curación; explicaciones progresivas tipo acordeón. Enfocar el uso en aprendizaje, no convertirlo en un tirador avanzado independiente. Diseño visual de dados pendiente.

- **«Conceptos y reglas básicas» — preferencia de UX:** organizar el aprendizaje por temas estructurados, no como diccionario plano. Propuesta inicial: «Tu personaje», «Cómo funcionan las tiradas», «Combate» y «Magia y descansos», con conceptos breves en acordeones. Los nombres y el detalle están pendientes de revisión; buscador no es prioridad inicial.
- **«Guía de dados» — prioridad de diseño baja por ahora:** conservar el enfoque interactivo simple aprobado, sin profundizar ni cerrar detalles visuales o funcionales hasta una revisión posterior.

## Recorridos del MVP a diseñar
1. Persona sin experiencia que visita Rolero por primera vez y quiere entender qué es el rol.
2. Persona que necesita saber qué ocurre en una partida y cómo prepararse.
3. Persona que quiere entender dados, tiradas y resultados mediante ejemplos.
4. Persona que consulta un concepto o regla y necesita identificar diferencias 2014/2024.
5. Persona que realiza el Test Vocacional y comprende su clase principal, alternativa, trasfondo e historia sugerida.
6. Persona que entra directamente a una herramienta y explora otras sin recorrido obligatorio.

## Aspectos por decidir
- Arquitectura de información, página inicial, acceso a herramientas y navegación contextual.
- Pantallas, pasos, progreso y salida/retoma del test sin cuenta.
- Cómo mostrar resultados y enlaces externos del test.
- Buscador y organización del glosario de reglas.
- Cómo mostrar notas de edición sin sobrecargar las explicaciones.
- Diseño responsive, accesibilidad y pruebas con principiantes.

## Fuera de los recorridos del MVP
La creación, edición, guardado y descarga de fichas de personajes pertenece a etapas posteriores; no diseñarla como si formara parte del MVP aprobado.
