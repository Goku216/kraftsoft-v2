"use client";
import { useEffect } from "react";
export function Effects() {
  useEffect(() => {
    const bar = document.getElementById("progress");
    const sc = () => {
      const h = document.documentElement,
        m = h.scrollHeight - h.clientHeight;
      if (bar) bar.style.transform = `scaleX(${m > 0 ? h.scrollTop / m : 0})`;
    };
    const mv = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>(".spot");
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", e.clientX - r.left + "px");
      t.style.setProperty("--my", e.clientY - r.top + "px");
    };
    addEventListener("scroll", sc, { passive: true });
    addEventListener("pointermove", mv, { passive: true });
    sc();
    return () => {
      removeEventListener("scroll", sc);
      removeEventListener("pointermove", mv);
    };
  }, []);
  return <div id="progress" aria-hidden />;
}
