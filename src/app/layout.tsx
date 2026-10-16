import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Effects } from "@/components/effects";
import { Footer } from "@/components/footer";
import { site, meta } from "@/lib/site";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...meta(
    site.name + " | Custom Software Development",
    "KraftSoft designs, builds, and scales web applications, backend systems, and mobile apps for startups and growing businesses.",
    "/",
  ),
};
const init = `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){}document.documentElement.classList.add("js")`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    slogan: site.tagline,
    url: site.url,
  };
  return (
    <html
      lang="en"
      data-theme="dark"
      className={geist.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: init }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </head>
      <body>
        <Effects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
