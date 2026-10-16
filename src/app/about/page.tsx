import { Cta, PageHero, Section, Heading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { meta } from "@/lib/site";
export const metadata = meta(
  "About | KraftSoft",
  "KraftSoft helps businesses turn ideas and requirements into reliable digital products.",
  "/about/",
);
const principles = [
  "Maintainability over unnecessary complexity",
  "User needs over assumptions",
  "Performance as a design requirement",
  "Thoughtful technical decisions",
  "Clear communication",
  "Continuous improvement",
];
export default function Page() {
  return (
    <>
      <PageHero
        title="Building technology with purpose."
        text="KraftSoft helps businesses turn ideas and requirements into reliable digital products."
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal className="rounded-xl border border-line bg-card p-8">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-3 text-muted">
              Build reliable, useful software that helps businesses solve
              meaningful problems.
            </p>
          </Reveal>
          <Reveal
            delay={80}
            className="rounded-xl border border-line bg-card p-8"
          >
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-3 text-muted">
              Enable businesses to innovate and scale through well-engineered
              digital products.
            </p>
          </Reveal>
        </div>
      </Section>
      <Section alt>
        <Heading title="Engineering principles" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <li key={p} className="rounded-xl border border-line bg-card p-6">
              {p}
            </li>
          ))}
        </ul>
      </Section>
      <Cta />
    </>
  );
}
