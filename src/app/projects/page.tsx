import { Cta, PageHero, Section } from "@/components/ui";
import { ProjectGrid } from "@/components/project-grid";
import { meta } from "@/lib/site";
export const metadata = meta(
  "Projects | KraftSoft",
  "Selected KraftSoft projects: a non-profit website and a medication reminder app for Android and iOS.",
  "/projects/",
);
export default function Page() {
  return (
    <>
      <PageHero
        title="Selected work"
        text="Projects we've designed and built."
      />
      <Section>
        <ProjectGrid />
      </Section>
      <Cta />
    </>
  );
}
