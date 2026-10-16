"use client";
import { useState } from "react";
import { projects } from "@/data/content";
import { ProjectCard } from "./visuals";
export function ProjectGrid() {
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [c, setC] = useState("All");
  return (
    <>
      <div
        role="group"
        aria-label="Filter projects"
        className="mb-8 flex flex-wrap gap-2"
      >
        {cats.map((x) => (
          <button
            key={x}
            aria-pressed={c === x}
            onClick={() => setC(x)}
            className={
              "h-10 rounded-full border px-4 text-sm transition-colors " +
              (c === x
                ? "border-brand bg-brand text-white"
                : "border-line text-muted hover:text-fg")
            }
          >
            {x}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects
          .filter((p) => c === "All" || p.category === c)
          .map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
      </div>
    </>
  );
}
