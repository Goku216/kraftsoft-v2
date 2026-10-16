import Link from "next/link";
import { notFound } from "next/navigation";
import { Btn, Cta, Icon, PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { servicesWithSlug as services } from "@/data/content";
import { meta, site } from "@/lib/site";
export const dynamicParams = false;
export const generateStaticParams = () =>
  services.map((s) => ({ slug: s.slug }));
type P = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? meta(s.title + " | KraftSoft", s.blurb, `/services/${slug}/`) : {};
}
export default async function Page({ params }: P) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.blurb,
    provider: { "@type": "Organization", name: site.name },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <PageHero title={s.title} text={s.blurb} />
      <Section>
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
          <Link href="/services/" className="hover:text-fg">
            Services
          </Link>{" "}
          / {s.title}
        </nav>
        <div className="grid gap-4 sm:grid-cols-2">
          {s.points.map((p, i) => (
            <Reveal key={p} delay={i * 60}>
              <div className="spot flex items-center gap-3 rounded-xl border border-line bg-card p-5">
                <Icon name="Check" className="size-5 shrink-0 text-bright" />
                {p}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-muted">Technologies: {s.tech}</p>
        <div className="mt-6 flex gap-3">
          <Btn href="/contact/">Discuss your project</Btn>
          <Btn href="/projects/" ghost>
            Explore our work
          </Btn>
        </div>
      </Section>
      <Section alt>
        <h2 className="h2 mb-8">Other services</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((x) => x.slug !== slug)
            .map((x) => (
              <li key={x.slug}>
                <Link
                  href={`/services/${x.slug}/`}
                  className="spot block rounded-xl border border-line bg-card p-5"
                >
                  {x.title}
                </Link>
              </li>
            ))}
        </ul>
      </Section>
      <Cta />
    </>
  );
}
