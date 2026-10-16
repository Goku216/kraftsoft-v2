"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav } from "@/lib/site";
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    const d = document.documentElement;
    const n = d.dataset.theme === "light" ? "dark" : "light";
    d.dataset.theme = n;
    try {
      localStorage.setItem("theme", n);
    } catch {}
  };
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  const link = (h: string) =>
    "text-sm transition-colors hover:text-fg " +
    (active(h) ? "text-fg" : "text-muted");
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          aria-label="KraftSoft home"
          className="rounded-md bg-white px-1"
        >
          <Image
            src="/images/kraftsoft-logo.jpg"
            alt="KraftSoft"
            width={120}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active(n.href) ? "page" : undefined}
              className={link(n.href)}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Switch between light and dark theme"
            className="grid size-11 place-items-center rounded-lg border border-line"
          >
            <Sun className="theme-sun size-4" />
            <Moon className="theme-moon size-4" />
          </button>
          <Link
            href="/contact/"
            className="hidden h-11 items-center rounded-lg bg-brand px-5 text-sm font-medium text-white sm:inline-flex"
          >
            Start a project
          </Link>
          <button
            className="grid size-11 place-items-center rounded-lg border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex h-[calc(100dvh-4rem)] flex-col gap-1 bg-bg p-5 lg:hidden"
        >
          {[...nav, { href: "/contact/", label: "Start a project" }].map(
            (n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-4 text-xl font-medium hover:bg-bg2"
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
