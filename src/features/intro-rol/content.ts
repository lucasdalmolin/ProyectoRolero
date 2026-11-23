export type GuideSection = { id: string; title: string; paragraphs: string[] };
export const introSections: GuideSection[] = [
  { id: "que-es", title: "¿Qué es un juego de rol?", paragraphs: ["En un juego de rol, cada persona interpreta un personaje y participa en una historia que se construye entre todos.", "No hay que memorizar un guion: elegís qué intenta hacer tu personaje y descubrís qué ocurre."] },
  { id: "participantes", title: "¿Quiénes participan?", paragraphs: ["Los jugadores deciden qué hacen sus personajes. Quien dirige la partida presenta lugares, personajes y desafíos, y describe lo que sucede."] },
  { id: "necesitas", title: "¿Qué necesitás para jugar?", paragraphs: ["Un grupo, ganas de imaginar y unas reglas compartidas. Según el juego, también pueden servir dados, hojas de personaje y una aventura preparada."] },
  { id: "acciones", title: "¿Qué podés hacer en una partida?", paragraphs: ["Podés explorar, investigar, conversar, negociar, ayudar o combatir. A menudo hay varias formas de resolver una misma situación."] },
  { id: "dados", title: "¿Cuándo se usan dados?", paragraphs: ["En muchos juegos, los dados ayudan a resolver acciones cuyo resultado es incierto. No hace falta tirar por cada decisión."] },
];
export const doorChoices = [
  { id: "knock", label: "Golpear la puerta", result: "Escuchás pasos del otro lado. Una voz pregunta: «¿Quién anda ahí?». Ahora podés responder o intentar otra cosa." },
  { id: "listen", label: "Escuchar primero", result: "Oís una conversación apagada detrás de la puerta. Quien dirige podría darte más pistas o pedir una tirada si es difícil escuchar." },
  { id: "force", label: "Intentar abrirla por la fuerza", result: "La puerta parece resistente. Quien dirige podría pedir una tirada para averiguar si conseguís abrirla y qué consecuencias tiene." },
] as const;
