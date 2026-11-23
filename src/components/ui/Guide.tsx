import { useState } from "react";
import { Accordion } from "./Accordion";
import type { GuideSection } from "../../features/intro-rol/content";

export function Guide({ sections }: { sections: GuideSection[] }) {
  const [completed, setCompleted] = useState<string[]>([]);
  const count = completed.length;
  return <section aria-label="Guía por secciones">
    <div className="mb-4 rounded-xl border border-stone-200 bg-white p-4">
      <p className="mb-2 text-sm font-medium" aria-live="polite">Leíste {count} de {sections.length} secciones</p>
      <div className="h-2 overflow-hidden rounded-full bg-stone-200" role="progressbar" aria-valuemin={0} aria-valuemax={sections.length} aria-valuenow={count} aria-label="Progreso de lectura"><div className="h-full bg-amber-700 transition-all" style={{width:`${sections.length ? count / sections.length * 100 : 0}%`}} /></div>
    </div>
    <div className="grid gap-3">{sections.map((section, index) => <Accordion key={section.id} title={section.title} initiallyOpen={index === 0}>
      <div className="space-y-3">{section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
      <label className="mt-4 flex cursor-pointer items-center gap-2 border-t border-stone-100 pt-4 text-sm font-medium">
        <input type="checkbox" className="h-4 w-4 accent-amber-800" checked={completed.includes(section.id)} onChange={event => setCompleted(current => event.target.checked ? [...current, section.id] : current.filter(id => id !== section.id))}/>
        Ya leí esta sección
      </label>
    </Accordion>)}</div>
    {count === sections.length && <p className="mt-4 rounded-lg bg-amber-50 p-4 font-medium text-amber-950" role="status">¡Terminaste de leer la guía! Podés probar la situación interactiva de abajo.</p>}
  </section>;
}
