import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";
export function Architecture({ labels = ["Frontend", "API", "Database"] }: { labels?: string[] }) {
  const xs = [70, 250, 430];
  return (
    <svg viewBox="0 0 500 200" role="img" aria-label={"Illustrative architecture: " + labels.join(" to ")} className="w-full">
      {[0, 1].map((i) => <line key={i} x1={xs[i] + 60} y1="100" x2={xs[i + 1] - 60} y2="100" stroke="var(--bright)" strokeWidth="1.5" className="flow" />)}
      {xs.map((x, i) => <g key={i}><rect x={x - 60} y="65" width="120" height="70" rx="10" fill="var(--card)" stroke={i === 1 ? "var(--bright)" : "var(--line)"} /><text x={x} y="105" textAnchor="middle" fontSize="13" fill="var(--fg)">{labels[i]}</text></g>)}
      <g opacity=".7"><rect x="190" y="160" width="120" height="30" rx="8" fill="none" stroke="var(--line)" strokeDasharray="3 4" /><text x="250" y="180" textAnchor="middle" fontSize="11" fill="var(--muted)">Mobile (Flutter)</text><line x1="250" y1="135" x2="250" y2="160" stroke="var(--line)" /></g>
    </svg>
  );
}
export function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-card">
      <div className="card-img overflow-hidden border-b border-line"><Image src={p.image} alt={p.title + " website screenshot"} width={p.w} height={p.h} sizes="(min-width:768px) 560px, 100vw" className="aspect-[16/10] w-full object-cover object-top" /></div>
      <div className="p-6"><p className="text-sm text-bright">{p.category}</p><h3 className="mt-1 text-xl font-semibold">{p.title}</h3><p className="mt-3 text-muted">{p.summary}</p><Link href={"/projects/" + p.slug + "/"} className="mt-4 inline-block text-sm text-bright hover:underline">View project details</Link></div>
    </article>
  );
}
