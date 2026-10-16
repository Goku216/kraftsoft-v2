import { PageHero, Section } from "@/components/ui";
import { meta } from "@/lib/site";
export const metadata = meta(
  "Terms of Use | KraftSoft",
  "Terms for using the KraftSoft website.",
  "/terms/",
);
export default function Page() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        text="Draft: have this reviewed by a legal professional before launch."
      />
      <Section>
        <div className="max-w-2xl space-y-5 text-muted">
          <p>
            The content on this website is provided for general information
            about KraftSoft and its services. It is not a contract or an offer.
          </p>
          <p>
            Services, scope, pricing, and timelines are agreed in writing for
            each project.
          </p>
          <p>
            The KraftSoft name, logo, and website content belong to KraftSoft.
            Project names and screenshots belong to their respective owners and
            are shown as examples of our work.
          </p>
        </div>
      </Section>
    </>
  );
}
