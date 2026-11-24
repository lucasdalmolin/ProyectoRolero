import { Accordion } from "./Accordion";
import type { GuideSection } from "../../features/intro-rol/content";
export function Guide({ sections }: { sections: GuideSection[] }) {
  return <section id="guia" aria-label="Guía por secciones" className="grid gap-3 scroll-mt-4">{sections.map((section, index) => <Accordion key={section.id} title={section.title} initiallyOpen={index === 0}><div className="space-y-3">{section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div></Accordion>)}</section>;
}
