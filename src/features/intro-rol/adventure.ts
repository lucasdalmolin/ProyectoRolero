import type { Adventure } from "../../components/ui/BranchingAdventure";

export const towerAdventure: Adventure = {
  title: "La puerta de la vieja torre",
  intro: "Una aldea necesita recuperar una medicina guardada en una torre. Elegí qué hace tu personaje y descubrí cómo una decisión cambia las siguientes.",
  start: "door",
  scenes: {
    door: { title: "Una puerta cerrada", text: "Llegás a la torre al anochecer. Hay luz detrás de una ventana y la puerta está cerrada. ¿Qué hacés?", choices: [
      { label: "Golpear y presentarme", next: "friendly", consequence: "El guardia te recibe sin sospechas." },
      { label: "Forzar la puerta", next: "alert", consequence: "El ruido alerta al guardia." }
    ] },
    friendly: { title: "Un guardia preocupado", text: "El guardia te abre. Te cuenta que perdió la llave del depósito y que su compañero está herido. ¿Cómo respondés?", choices: [
      { label: "Ayudar al compañero herido", next: "helped", consequence: "El guardia confía en vos y te presta una linterna." },
      { label: "Pedir indicaciones e ir al depósito", next: "alone", consequence: "Te indica el camino, pero seguís sin ayuda." }
    ] },
    alert: { title: "Un guardia en alerta", text: "El guardia te encuentra junto a la puerta dañada. Te exige una explicación. ¿Qué hacés?", choices: [
      { label: "Disculparme y explicar la urgencia", next: "watched", consequence: "Acepta escucharte, pero decide acompañarte." },
      { label: "Evitarlo y buscar otra entrada", next: "alone", consequence: "Entrás por una escalera lateral sin conocer el lugar." }
    ] },
    helped: { title: "El depósito oscuro", text: "Gracias a la linterna distinguís una cuerda que sostiene unas cajas inestables. La medicina está detrás. ¿Qué hacés?", choices: [
      { label: "Pedirle ayuda al guardia para mover las cajas", next: "safe", consequence: "La confianza que ganaste permite resolver el obstáculo juntos." },
      { label: "Pasar con cuidado entre las cajas", next: "safe", consequence: "La linterna te permite evitar la cuerda." }
    ] },
    watched: { title: "El depósito oscuro", text: "El guardia te acompaña, todavía desconfiado. Ves unas cajas inestables delante de la medicina.", choices: [
      { label: "Explicarle el peligro y pedir ayuda", next: "safe", consequence: "La conversación permite recuperar su confianza." },
      { label: "Apurarme y mover las cajas sin avisar", next: "delay", consequence: "Las cajas caen y el guardia te obliga a detenerte." }
    ] },
    alone: { title: "El depósito oscuro", text: "Llegás sin linterna ni compañía. Apenas distinguís la medicina entre unas cajas. ¿Qué hacés?", choices: [
      { label: "Buscar una fuente de luz antes de avanzar", next: "safe", consequence: "Tomarte un momento permite detectar el obstáculo." },
      { label: "Avanzar directamente hacia la medicina", next: "delay", consequence: "Tropezás con una cuerda y las cajas bloquean el paso." }
    ] },
    safe: { title: "La medicina vuelve a la aldea", text: "Recuperás la medicina y regresás a tiempo.", ending: "Las decisiones anteriores cambiaron los recursos y las personas disponibles. Distintos caminos pueden llegar al mismo resultado." },
    delay: { title: "Un regreso más difícil", text: "Conseguís recuperar la medicina después de despejar el paso, pero volvés más tarde de lo previsto.", ending: "Una decisión pequeña puede generar dificultades posteriores. En una partida real, la historia continuaría a partir de esas consecuencias." }
  }
};
