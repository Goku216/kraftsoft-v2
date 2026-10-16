import Link from "next/link";
import Image from "next/image";
import { servicesWithSlug } from "@/data/content";
import { nav, site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="border-t border-line bg-bg2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><span className="inline-block rounded-md bg-white px-1"><Image src="/images/kraftsoft-logo.jpg" alt="KraftSoft" width={120} height={48} className="h-10 w-auto" /></span>
          <p className="mt-4 max-w-sm text-sm text-muted">{site.tagline} We design, build, and scale web, mobile, and backend products for startups and growing businesses.</p></div>
        <nav aria-label="Footer"><h2 className="mb-3 text-sm font-semibold">Explore</h2><ul className="space-y-2 text-sm text-muted">{nav.map((n) => <li key={n.href}><Link className="hover:text-fg" href={n.href}>{n.label}</Link></li>)}</ul></nav>
        <nav aria-label="Services"><h2 className="mb-3 text-sm font-semibold">Services</h2><ul className="space-y-2 text-sm text-muted">{servicesWithSlug.map((s) => <li key={s.slug}><Link className="hover:text-fg" href={"/services/" + s.slug + "/"}>{s.title}</Link></li>)}</ul></nav>
        <div><h2 className="mb-3 text-sm font-semibold">Contact</h2><ul className="space-y-2 text-sm text-muted">
          <li><Link className="hover:text-fg" href="/contact/">Start a project</Link></li><li><Link className="hover:text-fg" href="/privacy/">Privacy Policy</Link></li><li><Link className="hover:text-fg" href="/terms/">Terms</Link></li>
          {site.social.map((s) => <li key={s.href}><a className="hover:text-fg" href={s.href}>{s.label}</a></li>)}</ul></div>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
