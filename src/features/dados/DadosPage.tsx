import { useState } from "react";
import { Link } from "react-router";

const dice = [4, 6, 8, 10, 12, 20, 100];
const uses: Record<number, string> = {4:"Daño de una daga.",6:"Daño de armas y hechizos.",8:"Daño de una espada larga a una mano.",10:"Daño de algunas armas y hechizos.",12:"Daño de una gran hacha.",20:"Ataques, pruebas de característica y salvaciones.",100:"Resultados porcentuales, normalmente con dos d10."};
const roll = (sides: number) => Math.floor(Math.random() * sides) + 1;
const signed = (n: number) => n < 0 ? " - " + Math.abs(n) : n > 0 ? " + " + n : "";
const button = "rounded-lg bg-amber-800 px-4 py-3 font-medium text-white disabled:opacity-40";
const panel = "rounded-xl border border-stone-200 bg-white p-5 sm:p-6";
const field = "w-full rounded-lg border border-stone-300 bg-white p-3";

export function DadosPage() {
  const [competence, setCompetence] = useState(1);
  const [attack, setAttack] = useState<number | null>(null);
  const [damage, setDamage] = useState<number[]>([]);
  const hit = attack !== null && attack !== 1 && (attack === 20 || attack + 5 >= 15);
  const [expression, setExpression] = useState("3d8 + 4");
  const [results, setResults] = useState<number[]>([]);
  const match = expression.trim().match(/^(\d{1,2})\s*d\s*(4|6|8|10|12|20|100)\s*(?:([+-])\s*(\d{1,3}))?$/i);
  const count = match ? Number(match[1]) : 0;
  const faces = match ? Number(match[2]) : 8;
  const modifier = match ? Number(match[4] ?? 0) * (match[3] === "-" ? -1 : 1) : 0;
  const valid = Boolean(match && count >= 1 && count <= 20);
  function change(value: string) { setExpression(value); setResults([]); }
  const [mode, setMode] = useState<"normal" | "adv" | "dis">("normal");
  const [throws, setThrows] = useState<number[]>([]);
  const chosenIndex = throws.length === 2 && (mode === "adv" ? throws[1] > throws[0] : throws[1] < throws[0]) ? 1 : 0;
  const chosen = throws[chosenIndex];
  return <div className="max-w-3xl space-y-6">
    <Link to="/" className="inline-block text-amber-800 underline">← Volver al inicio</Link>
    <div><h1 className="mb-3 text-3xl font-bold">Guía de dados</h1><p className="text-stone-600">Conocé los dados, interpretá tiradas y experimentá con las reglas de D&D 5e (2014).</p></div>
    <section className={panel}><h2 className="mb-3 text-2xl font-semibold">1. ¿De dónde sale el modificador?</h2>
      <p>Tu pícaro de nivel 1 tiene Destreza 16. El DM te pide una prueba de Destreza (Sigilo).</p>
      <div className="my-4 space-y-2 rounded-lg bg-stone-100 p-4"><p>Destreza 16 → modificador +3</p><p>Bonificador de competencia de nivel 1: +2</p></div>
      <label className="block text-sm font-medium">Competencia en Sigilo<select className={field} value={competence} onChange={e=>setCompetence(Number(e.target.value))}><option value={0}>Sin competencia</option><option value={1}>Con competencia</option><option value={2}>Con Pericia (Expertise)</option></select></label>
      <p className="my-3">Sumás +3 de Destreza{competence===0?" sin agregar competencia.":competence===1?" y +2 por competencia.":" y +4 por Pericia, que duplica la competencia."}</p>
      <p className="my-4 text-center text-2xl font-bold">1d20 + {3+2*competence}</p>
      <button className={button} onClick={()=>{change("1d20 + "+(3+2*competence));document.getElementById("calculador")?.scrollIntoView({behavior:"smooth"})}}>Probar en el calculador</button>
      <p className="mt-4 text-sm text-stone-600">Si el DM pide solamente una prueba de Destreza, normalmente usás +3. La competencia se agrega cuando corresponde a la prueba. Más adelante podrás calcular las bonificaciones de tu personaje en Conceptos y reglas básicas.</p>
      <details className="mt-4"><summary className="cursor-pointer font-medium">Referencia: tipos de dados</summary><dl className="mt-3 space-y-2">{dice.map(d=><div key={d}><dt className="font-semibold">d{d}</dt><dd className="text-sm text-stone-600">{uses[d]}</dd></div>)}</dl></details>
    </section>
    <section id="calculador" className={panel}><h2 className="mb-3 text-2xl font-semibold">2. Calculador de tiradas</h2><p className="mb-4">Escribí una expresión de un hechizo o arma, o armala con los selectores.</p>
      <label className="block text-sm font-medium">Expresión<input className={field} value={expression} onChange={e=>change(e.target.value)} placeholder="3d8 + 4"/></label>
      <div className="my-4 grid grid-cols-3 gap-2">
        <label className="text-sm">Cantidad<select className={field} value={valid?count:""} onChange={e=>change(e.target.value+"d"+faces+signed(modifier))}><option value="" disabled>Elegí</option>{Array.from({length:20},(_,i)=>i+1).map(n=><option key={n}>{n}</option>)}</select></label>
        <label className="text-sm">Dado<select className={field} value={faces} onChange={e=>change((valid?count:1)+"d"+e.target.value+signed(modifier))}>{dice.map(d=><option key={d} value={d}>d{d}</option>)}</select></label>
        <label className="text-sm">Modificador<input className={field} type="number" min="-999" max="999" value={modifier} onChange={e=>change((valid?count:1)+"d"+faces+signed(Number(e.target.value)))}/></label>
      </div>
      {valid ? <p className="rounded-lg bg-stone-100 p-4">Tirá {count} {count===1?"dado":"dados"} de {faces} caras{modifier===0?".":modifier>0?" y sumá "+modifier+" al total.":" y restá "+Math.abs(modifier)+" al total."}</p> : <p className="text-sm text-stone-600">Usá entre 1 y 20 dados de un mismo tipo y un modificador opcional. Ejemplo: 3d8 + 4.</p>}
      {results.length>0 && <p aria-live="polite" className="my-4 break-words text-center text-xl font-semibold">{results.join(" + ")}{signed(modifier)} = {results.reduce((a,b)=>a+b,0)+modifier}</p>}
      <button className={button+" mt-4"} disabled={!valid} onClick={()=>setResults(Array.from({length:count},()=>roll(faces)))}>Realizar tirada</button>
    </section>
    <section className={panel}><h2 className="mb-3 text-2xl font-semibold">3. Ataque y daño</h2><p>Atacás con una espada larga a una mano. Tu objetivo tiene Clase de Armadura 15. Tenés Fuerza 16 y competencia con el arma (+2).</p>
      <h3 className="mt-4 font-semibold">¿Impactás?</h3><p>1d20 + 3 de Fuerza + 2 de competencia.</p>
      <button className={button+" mt-3"} onClick={()=>{setAttack(roll(20));setDamage([])}}>Tirar ataque</button>
      {attack!==null && <p aria-live="polite" className="my-3 font-medium">{attack} + 5 = {attack+5}. {attack===20?"¡Impacto crítico!":attack===1?"Un 1 natural falla automáticamente.":hit?"¡Impactaste!":"Fallaste."}</p>}
      <h3 className="mt-4 font-semibold">¿Cuánto daño hacés?</h3><p>{attack===20?"2d8 por el crítico":"1d8"} + 3 de Fuerza. No sumás competencia al daño de este ataque.</p>
      <button className={button+" mt-3"} disabled={!hit} onClick={()=>setDamage(Array.from({length:attack===20?2:1},()=>roll(8)))}>Tirar daño</button>
      {damage.length>0 && <p aria-live="polite" className="mt-3 font-semibold">{damage.join(" + ")} + 3 = {damage.reduce((a,b)=>a+b,3)} puntos de daño.</p>}
    </section>
    <section className={panel}><h2 className="mb-3 text-2xl font-semibold">4. Ventaja y desventaja</h2><p>Intentás pasar sin que un guardia te descubra. El DM fija una dificultad de 15 y tenés +3 de Sigilo.</p>
      <div className="my-4 grid grid-cols-3 gap-2">{(["normal","adv","dis"] as const).map(m=><button key={m} aria-pressed={mode===m} onClick={()=>{setMode(m);setThrows([])}} className={`rounded-lg border px-1 py-3 text-sm ${mode===m?"border-amber-800 bg-amber-50":"border-stone-300"}`}>{m==="normal"?"Normal":m==="adv"?"Ventaja":"Desventaja"}</button>)}</div>
      <p className="rounded-lg bg-stone-100 p-4">{mode==="normal"?"Tirá un d20.":mode==="adv"?"El DM te concede ventaja: tirá dos d20 y conservá el mayor.":"El DM determina que tenés desventaja: tirá dos d20 y conservá el menor."}</p>
      {throws.length>0 && <div aria-live="polite" className="my-4 space-y-3"><div className="flex flex-wrap gap-3">{throws.map((r,i)=><div key={i} className={`rounded-lg border p-3 ${i===chosenIndex?"border-amber-800":"border-stone-200 text-stone-500"}`}><p className="text-2xl font-bold">{r}</p><p className="text-xs">{i===chosenIndex?"Elegido":"Descartado"}</p></div>)}</div><p className="font-semibold">{chosen} + 3 = {chosen+3}</p><p>{chosen+3>=15?"¡Conseguiste pasar! Alcanzaste la dificultad.":"El guardia te descubre. No alcanzaste la dificultad."}</p></div>}
      <button className={button+" mt-4"} onClick={()=>setThrows(Array.from({length:mode==="normal"?1:2},()=>roll(20)))}>Intentar pasar</button>
    </section>
    <p className="text-sm text-stone-500">Contenido y ejemplos provisionales.</p>
  </div>;
}
