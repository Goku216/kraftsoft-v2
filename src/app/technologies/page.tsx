import { Cta, PageHero, Section } from "@/components/ui";
import { Architecture } from "@/components/visuals";
import { tech } from "@/data/content";
import { meta } from "@/lib/site";
export const metadata = meta(
  "Technologies | KraftSoft",
  "Next.js, React, TypeScript, Django, PostgreSQL and Flutter: the technologies KraftSoft uses to build products.",
  "/technologies/",
);
export default function Page() {
  return (
    <>
      <PageHero
        title="The technology behind the work"
        text="Tools we use to build client products, grouped by role."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {tech.map((t) => (
            <div
              key={t.group}
              className="rounded-xl border border-line bg-card p-6"
            >
              <h2 className="text-xl font-semibold">{t.group}</h2>
              <p className="mt-2 text-muted">{t.why}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md border border-line px-3 py-1 text-sm"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section alt>
        <h2 className="h2 mb-8">A typical product architecture</h2>
        <div className="mx-auto max-w-2xl">
          <Architecture
            labels={["Next.js frontend", "Django REST API", "PostgreSQL"]}
          />
          <p className="mt-3 text-center text-sm text-muted">
            Illustrative only. Every project's architecture is designed to fit
            its requirements. This website itself is static and uses no backend.
          </p>
        </div>
      </Section>
      <Cta />
    </>
  );
}
