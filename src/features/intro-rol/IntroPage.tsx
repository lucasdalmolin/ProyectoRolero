import { Link } from "react-router";
import { Guide } from "../../components/ui/Guide";
import { introSections } from "./content";
import { DoorScenario } from "./DoorScenario";

export function IntroPage() {
  return <div className="max-w-3xl">
    <Link to="/" className="mb-6 inline-block text-amber-800 underline underline-offset-4">← Volver al inicio</Link>
    <h1 className="mb-3 text-3xl font-bold">Introducción a los juegos de rol</h1>
    <p className="mb-7 text-stone-600">Explorá los conceptos a tu ritmo. Podés abrir cualquier sección y marcar lo que ya leíste.</p>
    <Guide sections={introSections} />
    <DoorScenario />
    <p className="mt-6 text-sm text-stone-500">Contenido y ejemplos provisionales: se revisarán antes del lanzamiento.</p>
  </div>;
}
