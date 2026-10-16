import { tech } from "@/data/content";
export function Marquee() {
  const items = tech.flatMap((t) => t.items);
  return <div className="marquee" aria-label="Technologies we work with" role="list"><div className="marquee-track">{[...items, ...items].map((t, i) => <span key={i} role="listitem" aria-hidden={i >= items.length}>{t}</span>)}</div></div>;
}
