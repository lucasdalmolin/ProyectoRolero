import { useState } from "react";

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export function LearningQuiz({ questions }: { questions: QuizQuestion[] }) {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const index = answers.length;
  const question = questions[Math.min(index, questions.length - 1)];
  const [selected, setSelected] = useState<number | null>(null);
  const score = answers.filter((answer, i) => answer === questions[i].correctIndex).length;
  function reset() { setAnswers([]); setSelected(null); setFinished(false); setStarted(true); }
  function next() {
    if (selected === null) return;
    setAnswers([...answers, selected]);
    setSelected(null);
    if (index + 1 === questions.length) setFinished(true);
  }
  if (!questions.length) return null;
  return <section id="desafio" aria-labelledby="quiz-title" className="mt-10 scroll-mt-4 rounded-xl border border-stone-200 bg-white p-5 sm:p-6">
    <h2 id="quiz-title" className="mb-3 text-2xl font-semibold">Desafío del aventurero</h2>
    {!started ? <><p className="mb-4 text-stone-700">Poné a prueba lo que aprendiste. {questions.length} preguntas, sin límite de tiempo.</p><button type="button" onClick={reset} className="rounded-lg bg-amber-800 px-5 py-3 font-medium text-white">Empezar desafío</button></> : finished ? <div aria-live="polite">
      <p className="text-3xl font-bold">{score} de {questions.length} aciertos</p>
      <p className="my-4 text-stone-700">{score === questions.length ? "¡Excelente! Ya conocés los conceptos básicos. Podés seguir explorando las herramientas de Rolero." : "¡Buen intento! Volvé a consultar las secciones que necesites y probá otra vez."}</p>
      <button type="button" onClick={reset} className="rounded-lg bg-amber-800 px-5 py-3 font-medium text-white">Repetir desafío</button>
      <a href="#guia" className="ml-4 inline-block py-3 text-amber-800 underline">Volver a la guía</a>
    </div> : <>
      <p className="mb-2 text-sm text-stone-600">Pregunta {index + 1} de {questions.length}</p>
      <progress className="mb-4 h-2 w-full accent-amber-800" value={index + 1} max={questions.length} aria-label="Progreso del desafío"/>
      <h3 className="mb-4 text-lg font-semibold">{question.prompt}</h3>
      <div className="grid gap-2">{question.options.map((option, i) => <button key={i} type="button" disabled={selected !== null} onClick={() => setSelected(i)} className={`rounded-lg border p-3 text-left focus-visible:outline-2 focus-visible:outline-amber-800 ${selected !== null && i === question.correctIndex ? "border-green-700 bg-green-50" : selected === i ? "border-red-700 bg-red-50" : "border-stone-300"}`}>{option}{selected !== null && i === question.correctIndex ? " — Correcta" : selected === i ? " — Incorrecta" : ""}</button>)}</div>
      {selected !== null && <div className="mt-4" aria-live="polite"><p className="font-semibold">{selected === question.correctIndex ? "¡Correcto!" : "No exactamente."}</p><p className="my-2 text-stone-700">{question.explanation}</p><button type="button" onClick={next} className="mt-2 rounded-lg bg-amber-800 px-5 py-3 font-medium text-white">{index + 1 === questions.length ? "Ver resultado" : "Siguiente pregunta"}</button></div>}
    </>}
  </section>;
}
