import { useState } from "react";
import { Link } from "react-router";
import { scenes, sessionSections } from "./content";

export function PartidaPage() {
  const [index, setIndex] = useState(0);
  const [perspective, setPerspective] = useState<"player" | "dm">("player");
  const scene = scenes[index];
  return <div className="max-w-3xl">
    <Link to="/" className="mb-6 inline-block text-amber-800 underline underline-offset-4">← Volver al inicio</Link>
    <h1 className="mb-3 text-3xl font-bold">Cómo funciona una partida</h1>
    <p className="mb-6 text-stone-600">Descubrí cómo los jugadores y el DM construyen una historia juntos. Observá una misma partida desde ambos lados de la mesa.</p>
    <section aria-labelledby="simulation-title" className="rounded-xl border border-stone-200 bg-white p-5 sm:p-6">
      <h2 id="simulation-title" className="text-2xl font-semibold">Una misma partida, dos perspectivas</h2>
      <p className="mt-3 text-sm text-stone-600">Escena {index + 1} de {scenes.length}</p>
      <progress className="mb-4 h-2 w-full accent-amber-800" value={index + 1} max={scenes.length} aria-label="Progreso de la simulación"/>
      <div aria-live="polite">
        <h3 className="mb-3 text-xl font-semibold">{scene.title}</h3>
        <div className="rounded-lg bg-stone-100 p-4"><p className="mb-2 text-xs font-semibold uppercase text-stone-600">Lo que sucede en la mesa</p><p>{scene.dialogue}</p></div>
      </div>
      <div role="group" aria-label="Elegir perspectiva" className="my-4 grid grid-cols-2 gap-2">
        {(["player", "dm"] as const).map(role => <button key={role} type="button" aria-pressed={perspective === role} onClick={() => setPerspective(role)} className={`rounded-lg border px-3 py-3 font-medium ${perspective === role ? "border-amber-800 bg-amber-800 text-white" : "border-stone-300 text-stone-700"}`}>{role === "player" ? "Jugador" : "DM"}</button>)}
      </div>
      <div aria-live="polite" className="rounded-lg border border-stone-200 p-4"><h4 className="mb-2 font-semibold">{perspective === "player" ? "Desde el lado del jugador" : "Desde el lado del DM"}</h4><p className="italic text-stone-700">{scene[perspective]}</p></div>
      <p className="my-4 text-sm text-stone-500">Cambiá de perspectiva para descubrir cómo vive esta escena el otro participante.</p>
      <p className="mb-5 rounded-lg bg-amber-50 p-4 text-amber-950">{scene.lesson}</p>
      <div className="flex flex-wrap gap-2"><button type="button" disabled={index === 0} onClick={() => setIndex(i => i - 1)} className="rounded-lg border border-stone-300 px-4 py-3 disabled:opacity-40">Anterior</button><button type="button" onClick={() => setIndex(i => i === scenes.length - 1 ? 0 : i + 1)} className="flex-1 rounded-lg bg-amber-800 px-4 py-3 font-medium text-white">{index === scenes.length - 1 ? "Volver a empezar" : "Siguiente escena"}</button></div>
      {index === scenes.length - 1 && <p className="mt-5 border-t border-stone-200 pt-4 font-medium">El DM juega con vos, no contra vos. Lo importante es construir una historia juntos.</p>}
    </section>
    <section className="mt-8"><h2 className="mb-4 text-2xl font-semibold">Los momentos de una partida</h2><div className="grid gap-3">{sessionSections.map(section => <article key={section.title} className="rounded-xl border border-stone-200 bg-white p-4"><h3 className="mb-2 font-semibold">{section.title}</h3><p className="text-stone-700">{section.text}</p></article>)}</div></section>
    <p className="mt-6 text-sm text-stone-500">Contenido y ejemplos provisionales: se revisarán antes del lanzamiento.</p>
  </div>;
}
