import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta, Icon, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/visuals";
import { projects, projectDetails } from "@/data/content";
import { meta } from "@/lib/site";
export const dynamicParams = false;
export const generateStaticParams = () =>
  projects.map((p) => ({ slug: p.slug }));
type P = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p
    ? meta(p.title + " | KraftSoft Projects", p.summary, `/projects/${slug}/`)
    : {};
}
export default async function Page({ params }: P) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const d = projectDetails[slug];
  const others = projects.filter((x) => x.slug !== slug);
  return (
    <>
      <section className="pb-10 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-5">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/projects/" className="hover:text-fg">
              Projects
            </Link>{" "}
            / {p.title}
          </nav>
          <p className="text-sm text-bright">{p.category}</p>
          <h1 className="h1 mt-2 max-w-3xl">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{p.summary}</p>
        </div>
      </section>
      <Section>
        <Reveal>
          <div className="card-img overflow-hidden rounded-xl border border-line">
            <Image
              src={p.image}
              alt={p.title + " screenshot"}
              width={p.w}
              height={p.h}
              priority
              sizes="(min-width:1152px) 1100px, 100vw"
              className="w-full"
            />
          </div>
        </Reveal>
        {d && (
          <div className="mt-12 grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-xl font-semibold">Platform</h2>
              <p className="mt-2 text-muted">{d.platform}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Key features</h2>
              <ul className="mt-4 space-y-3">
                {d.features.map((f) => (
                  <li key={f} className="flex gap-3 text-muted">
                    <Icon
                      name="Check"
                      className="mt-0.5 size-5 shrink-0 text-bright"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Section>
      {others.length > 0 && (
        <Section alt>
          <h2 className="h2 mb-8">Related projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <ProjectCard key={o.slug} p={o} />
            ))}
          </div>
        </Section>
      )}
      <Cta />
    </>
  );
}
