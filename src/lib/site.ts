// Edit before launch. Placeholders are intentional: do not invent contact details.
export const site = {
  name: "KraftSoft",
  tagline: "Innovation at Scale, Engineered to Empower.",
  url: "https://YOUR_DOMAIN", // TODO: production domain
  email: "YOUR_CONTACT_EMAIL", // TODO: real contact email
  social: [] as { label: string; href: string }[], // TODO: add verified links
};
export const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
  { href: "/process/", label: "Process" },
  { href: "/technologies/", label: "Technologies" },
];
export function meta(title: string, description: string, path: string) {
  return {
    title,
    description,
    alternates: { canonical: site.url + path },
    openGraph: {
      title,
      description,
      url: site.url + path,
      siteName: site.name,
      type: "website" as const,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  };
}
