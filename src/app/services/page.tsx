import Link from "next/link";
import { Cta, Icon, PageHero, Section, Btn } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { servicesWithSlug as services } from "@/data/content"; import { meta } from "@/lib/site";
export const metadata = meta("Services | KraftSoft", "Web application, backend and API, Flutter mobile app, database, MVP and SaaS development, and application maintenance.", "/services/");
export default function Page() {
  return (<><PageHero title="Engineering digital products that move businesses forward" text="KraftSoft helps startups and growing businesses build, improve, and scale modern digital products." />
    {services.map((s, i) => (<Section key={s.title} alt={i % 2 === 1}><Reveal className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
      <div><Icon name={s.icon} className="size-8 text-bright" /><h2 className="h2 mt-4">{s.title}</h2><p className="mt-3 text-muted">{s.blurb}</p><p className="mt-4 text-sm text-muted">Technologies: {s.tech}</p><div className="mt-6"><div className="flex flex-wrap gap-3"><Btn href="/contact/">Discuss your project</Btn><Btn href={"/services/" + s.slug + "/"} ghost>Service details</Btn></div></div></div>
      <ul className="grid gap-3 sm:grid-cols-2">{s.points.map((p) => <li key={p} className="rounded-lg border border-line bg-card px-4 py-3 text-sm">{p}</li>)}</ul></Reveal></Section>))}
    <Cta /></>);
}
