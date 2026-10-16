import { PageHero, Section } from "@/components/ui"; import { ContactForm } from "@/components/contact-form"; import { meta } from "@/lib/site";
export const metadata = meta("Contact | KraftSoft", "Tell KraftSoft what you're planning to build, improve, or scale.", "/contact/");
export default function Page() {
  return (<><PageHero title="Let's build something meaningful." text="Tell us what you're planning to build, improve, or scale. Share a few details so we can understand your project." />
    <Section><div className="mx-auto max-w-2xl"><ContactForm /></div></Section></>);
}
