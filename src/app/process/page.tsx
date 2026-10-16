import { Cta, PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal"; import { steps } from "@/data/content"; import { meta } from "@/lib/site";
export const metadata = meta("Process | KraftSoft", "How KraftSoft takes a project from first conversation to launch and ongoing support.", "/process/");
export default function Page() {
  return (<><PageHero title="From first conversation to launch" text="A clear sequence of stages. Deliverables and timing are agreed per project." />
    <Section><ol className="relative space-y-8 border-l border-line pl-8">{steps.map(([t, d, del], i) => (
      <Reveal key={t}><li className="relative"><span className="absolute -left-[3.1rem] grid size-8 place-items-center rounded-full border border-line bg-bg text-sm text-bright">{i + 1}</span>
        <h2 className="text-xl font-semibold">{t}</h2><p className="mt-2 max-w-2xl text-muted">{d}</p><p className="mt-2 text-sm text-muted">Typical deliverables: {del}</p></li></Reveal>))}</ol></Section><Cta /></>);
}
