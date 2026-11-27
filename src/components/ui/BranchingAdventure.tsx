import { useState } from "react";

export type AdventureChoice = { label: string; next: string; consequence: string };
export type AdventureScene = { title: string; text: string; choices?: AdventureChoice[]; ending?: string };
export type Adventure = { title: string; intro: string; start: string; totalSteps?: number; scenes: Record<string, AdventureScene> };

export function BranchingAdventure({ adventure }: { adventure: Adventure }) {
  const [history, setHistory] = useState<AdventureChoice[]>([]);
  const scene = adventure.scenes[history.at(-1)?.next ?? adventure.start];
  return <section aria-labelledby="adventure-title" className="mt-10 rounded-xl border border-stone-200 bg-white p-5 sm:p-6">
    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-800">Miniaventura interactiva</p>
    <h2 id="adventure-title" className="mb-3 text-2xl font-semibold">{adventure.title}</h2>
    <p className="mb-5 text-stone-600">{adventure.intro}</p>
    <div aria-live="polite" className="space-y-3">
      <p className="text-sm font-medium text-stone-500">{adventure.totalSteps ? `Paso ${history.length + 1} de ${adventure.totalSteps}${scene.ending ? " · Desenlace" : ""}` : scene.ending ? "Final de la aventura" : `Decisión ${history.length + 1}`}</p>
      <h3 className="text-xl font-semibold">{scene.title}</h3>
      <p className="leading-relaxed text-stone-700">{scene.text}</p>
      {scene.ending && <p className="rounded-lg bg-amber-50 p-4 text-amber-950">{scene.ending}</p>}
    </div>
    {scene.choices && <div className="mt-5 grid gap-2">{scene.choices.map(choice => <button key={choice.label} type="button" onClick={() => setHistory(current => [...current, choice])} className="rounded-lg border border-stone-300 p-3 text-left font-medium hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-amber-800">{choice.label}</button>)}</div>}
    {history.length > 0 && <details className="mt-5 rounded-lg border border-stone-200 p-3" open={Boolean(scene.ending)}><summary className="cursor-pointer font-medium">Tus decisiones y sus consecuencias</summary><ol className="mt-3 list-decimal space-y-3 pl-5">{history.map((choice, i) => <li key={i}><p className="font-medium">{choice.label}</p><p className="text-sm text-stone-600">{choice.consequence}</p></li>)}</ol></details>}
    {history.length > 0 && <button type="button" onClick={() => setHistory([])} className="mt-5 rounded-lg border border-amber-800 px-4 py-2 font-medium text-amber-800">{scene.ending ? "Explorar otro camino" : "Reiniciar aventura"}</button>}
  </section>;
}
