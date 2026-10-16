import Link from "next/link";
import * as Icons from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";
export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const C =
    (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Box;
  return <C className={className} aria-hidden />;
}
export function Btn({
  href,
  children,
  ghost,
}: {
  href: string;
  children: ReactNode;
  ghost?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        "inline-flex h-12 items-center rounded-lg px-6 text-sm font-medium transition-colors " +
        (ghost
          ? "border border-line hover:border-bright"
          : "shimmer bg-brand text-white")
      }
    >
      {children}
    </Link>
  );
}
export function Section({
  children,
  alt,
  id,
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={"py-20 md:py-28 " + (alt ? "bg-bg2" : "")}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}
export function Heading({ title, text }: { title: string; text?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="h2">{title}</h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </Reveal>
  );
}
export function Cta({
  title = "Have an idea worth building?",
  text = "Let's turn your next idea into a digital product designed for real users and long-term growth.",
}) {
  return (
    <Section>
      <Reveal className="rounded-2xl border border-line bg-card p-8 md:p-14">
        <h2 className="h2 max-w-xl">{title}</h2>
        <p className="mt-4 max-w-xl text-muted">{text}</p>
        <div className="mt-8">
          <Btn href="/contact/">Tell us about your project</Btn>
        </div>
      </Reveal>
    </Section>
  );
}
export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="border-b border-line pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-5">
        <h1 className="h1 max-w-3xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{text}</p>
      </div>
    </section>
  );
}
