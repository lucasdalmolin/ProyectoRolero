import { useState } from "react";
import { doorChoices } from "./content";

export function DoorScenario() {
  const [selected, setSelected] = useState<string | null>(null);
  const choice = doorChoices.find(option => option.id === selected);
  return <section aria-labelledby="scenario-title" className="mt-10 rounded-xl border border-stone-200 bg-white p-5 sm:p-6">
    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-800">Probá una decisión</p>
    <h2 id="scenario-title" className="mb-3 text-2xl font-semibold">Una puerta cerrada</h2>
    <p className="mb-5 text-stone-700">Tu personaje llega a una habitación desconocida. La puerta está cerrada. ¿Qué hacés?</p>
    <div className="grid gap-2 sm:grid-cols-3">{doorChoices.map(option => <button key={option.id} type="button" aria-pressed={selected === option.id} onClick={() => setSelected(option.id)} className={`rounded-lg border p-3 text-left text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 ${selected === option.id ? "border-amber-700 bg-amber-50" : "border-stone-300 hover:bg-stone-50"}`}>{option.label}</button>)}</div>
    {choice && <div className="mt-5 rounded-lg bg-stone-100 p-4" aria-live="polite"><h3 className="mb-2 font-semibold">¿Qué podría pasar?</h3><p className="text-stone-700">{choice.result}</p><p className="mt-3 text-sm text-stone-600">En una partida real, las consecuencias dependen de la situación y de las decisiones del grupo.</p><button type="button" onClick={() => setSelected(null)} className="mt-4 text-sm font-medium text-amber-800 underline underline-offset-4">Volver a elegir</button></div>}
  </section>;
}
