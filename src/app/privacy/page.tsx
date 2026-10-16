import { PageHero, Section } from "@/components/ui"; import { meta } from "@/lib/site";
export const metadata = meta("Privacy Policy | KraftSoft", "How the KraftSoft website handles information.", "/privacy/");
export default function Page() {
  return (<><PageHero title="Privacy Policy" text="Draft: have this reviewed by a legal professional before launch." /><Section><div className="max-w-2xl space-y-5 text-muted"><p>This website is static and has no server-side processing. We do not run accounts, databases, or analytics scripts on it.</p><p>Your theme choice (light or dark) is stored in your browser only, and is never sent to us.</p><p>The contact form does not send data to a server. It opens your email application with a message you review and send yourself. Anything you send by email is handled according to the email providers involved.</p><p>Fonts are bundled with the site at build time rather than loaded from a third party.</p></div></Section></>);
}
