import Link from "next/link";
import { Btn, Cta, Heading, Icon, Section } from "@/components/ui";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { Architecture, ProjectCard } from "@/components/visuals";
import {
  projects,
  servicesWithSlug as services,
  steps,
  tech,
} from "@/data/content";
export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-32 md:pt-44">
        <div aria-hidden className="aurora" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_1fr]">
          <div className="hero-copy">
            <p className="mb-5 text-sm text-bright">
              Digital product engineering
            </p>
            <h1 className="h1">Innovation at scale. Engineered to empower.</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              KraftSoft partners with startups and growing businesses to design,
              build, and scale modern web applications, robust backend systems,
              and cross-platform mobile experiences.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Btn href="/contact/">Start a project</Btn>
              <Btn href="/projects/" ghost>
                Explore our work
              </Btn>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-card/60 p-5">
            <Architecture />
            <p className="mt-2 text-center text-xs text-muted">
              Illustrative architecture
            </p>
          </div>
        </div>
      </section>
      <Marquee />
      <Section alt>
        <Heading
          title="What we build"
          text="Six capabilities, one team, from first idea to maintained product."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Link
                href={"/services/" + s.slug + "/"}
                className="spot block h-full rounded-xl border border-line bg-card p-6 hover:border-bright"
              >
                <Icon name={s.icon} className="size-6 text-bright" />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section>
        <Heading
          title="Selected projects"
          text="Real work, shown with what we can verify."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Btn href="/projects/" ghost>
            Explore all projects
          </Btn>
        </div>
      </Section>
      <Section alt>
        <Heading title="How we work" />
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 60}>
              <li className="h-full rounded-xl border border-line bg-card p-6">
                <span className="text-sm text-bright">Step {i + 1}</span>
                <h3 className="mt-2 font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
      <Section>
        <Heading title="Technology we build with" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((t) => (
            <Reveal key={t.group}>
              <div className="h-full rounded-xl border border-line p-6">
                <h3 className="font-semibold">{t.group}</h3>
                <p className="mt-3 text-sm text-muted">{t.items.join(", ")}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section alt>
        <Heading
          title="What working with us looks like"
          text="How we approach every engagement."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Scope first",
              "We agree what is being built, and what is not, before development starts.",
            ],
            [
              "Iterative delivery",
              "Work is delivered in stages so you can review real progress.",
            ],
            [
              "Plain language",
              "Technical decisions are explained in terms of your business.",
            ],
            [
              "Honest estimates",
              "Timelines and budgets are discussed openly and agreed per project.",
            ],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="spot h-full rounded-xl border border-line bg-card p-6">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Cta />
    </>
  );
}
