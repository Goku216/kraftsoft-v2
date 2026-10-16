"use client";
import { useState } from "react";
import { site } from "@/lib/site";
const types = [
  "Web application",
  "Mobile application",
  "SaaS / MVP",
  "Backend or API development",
  "Existing application improvement",
  "Other",
];
const f = "mt-1 w-full rounded-lg border border-line bg-card px-4 py-3 text-fg";
export function ContactForm() {
  const [msg, setMsg] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const g = (k: string) => String(d.get(k) || "").trim() || "-";
    const body = [
      "Name: " + g("name"),
      "Email: " + g("email"),
      "Company: " + g("company"),
      "Project type: " + g("type"),
      "Budget: " + g("budget"),
      "Timeline: " + g("timeline"),
      "",
      g("details"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry from " + g("name"))}&body=${encodeURIComponent(body)}`;
    setMsg(
      "Your email app should now open with your message ready. Nothing has been sent yet: review it and press send there.",
    );
  }
  return (
    <form onSubmit={submit} className="grid gap-5">
      <label>
        Full name *
        <input name="name" required autoComplete="name" className={f} />
      </label>
      <label>
        Work email *
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={f}
        />
      </label>
      <label>
        Company
        <input name="company" autoComplete="organization" className={f} />
      </label>
      <label>
        Project type *
        <select name="type" required defaultValue="" className={f}>
          <option value="" disabled>
            Select one
          </option>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          Estimated budget (optional)
          <input name="budget" className={f} />
        </label>
        <label>
          Timeline (optional)
          <input name="timeline" className={f} />
        </label>
      </div>
      <label>
        Project description *
        <textarea name="details" required rows={6} className={f} />
      </label>
      <button className="h-12 rounded-lg bg-brand px-6 font-medium text-white hover:brightness-110">
        Compose email
      </button>
      <p role="status" aria-live="polite" className="text-sm text-muted">
        {msg ||
          "This site has no server. Submitting opens your email app so you can review and send the message yourself; we can't confirm delivery."}
      </p>
    </form>
  );
}
