export const services = [
  { icon: "Globe", title: "Web Application Development", blurb: "Responsive web apps that your team and customers rely on every day.",
    points: ["Business applications", "SaaS platforms", "Admin dashboards", "Customer portals", "Booking and workflow systems", "E-commerce applications"], tech: "Next.js, React, TypeScript, Tailwind CSS" },
  { icon: "Server", title: "Backend & API Engineering", blurb: "Reliable server-side systems that connect your product to the rest of your business.",
    points: ["REST API development", "Authentication and authorization", "Business logic", "Third-party integrations", "Workflow automation", "Payment integrations"], tech: "Django, Django REST Framework, PostgreSQL" },
  { icon: "Smartphone", title: "Mobile App Development", blurb: "One codebase for Android and iOS, built around how people use their phones.",
    points: ["Cross-platform Android and iOS apps", "Customer-facing and business apps", "API integration", "Push notifications", "App Store and Google Play release support"], tech: "Flutter, Dart" },
  { icon: "Database", title: "Database Design & Engineering", blurb: "Data models that stay correct and fast as your product grows.",
    points: ["Relational data modeling", "Schema design", "Data integrity", "Query optimization and indexing", "Migrations", "Backup planning"], tech: "PostgreSQL, SQL, Django ORM" },
  { icon: "Rocket", title: "MVP & SaaS Development", blurb: "Scope, build, and launch a first version, then improve it with real feedback.",
    points: ["Scope definition", "Feature prioritization", "Product architecture", "User interface development", "Subscription workflows when required", "Iterative delivery"], tech: "A combination of the capabilities above" },
  { icon: "Wrench", title: "Maintenance & Optimization", blurb: "Keep an existing application healthy, secure, and improving.",
    points: ["Bug fixes", "Dependency upgrades", "Performance improvements", "Technical debt reduction", "Security updates"], tech: "Matched to your existing stack" },
];
export const projects = [
  { slug: "ray-of-hope-society", title: "Nagarkata Ray of Hope Society", category: "Non-profit website",
    summary: "A website for a non-profit serving communities in West Bengal's Dooars region, with clear paths to donate and volunteer, and sections for programs, events, gallery, stories, and team.",
    image: "/images/ray-of-hope-society.png", w: 2527, h: 1270 },
  { slug: "medbell", title: "MedBell", category: "Mobile app and website",
    summary: "A medication reminder app for Android and iOS. Caregivers are notified when a medicine is missed and can track history and daily overviews for the people they look after.",
    image: "/images/medbell.png", w: 2516, h: 1152 },
];
export const tech = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"], why: "Fast, accessible interfaces that stay maintainable." },
  { group: "Backend", items: ["Python", "Django", "Django REST Framework"], why: "APIs and business logic with a mature, well-tested foundation." },
  { group: "Database", items: ["PostgreSQL", "SQL", "Django ORM"], why: "Structured, reliable data with room to grow." },
  { group: "Mobile", items: ["Flutter", "Dart"], why: "Android and iOS apps from a single codebase." },
];
export const steps = [
  ["Discover", "Understand business goals, users, requirements, and constraints.", "Requirements summary, initial scope, feature priorities"],
  ["Plan & architect", "Define scope, technical architecture, data models, integrations, and milestones.", "Architecture outline, milestone plan"],
  ["Design", "Create user flows, wireframes, and interface designs where needed.", "User flows, prototypes"],
  ["Build", "Develop the frontend, backend, database, and mobile apps to the agreed scope.", "Working software in iterations"],
  ["Test", "Check functionality, responsiveness, accessibility, integrations, and performance.", "Verified, release-ready build"],
  ["Deploy & support", "Prepare for production, verify the live product, then maintain and improve it.", "Live product, agreed ongoing support"],
];
export const serviceSlugs = ["web-development", "backend-development", "mobile-app-development", "database-engineering", "mvp-saas-development", "maintenance-optimization"];
export const servicesWithSlug = services.map((s, i) => ({ ...s, slug: serviceSlugs[i] }));
// Only details visible on the live products/screenshots.
export const projectDetails: Record<string, { platform: string; features: string[] }> = {
  "ray-of-hope-society": { platform: "Website", features: ["Pages for programs, events, gallery, stories, team, and contact", "Donate and volunteer actions in the header and hero", "Hero introducing the organisation's mission and region"] },
  medbell: { platform: "Android and iOS app, with website", features: ["Medicine reminders with custom timings, repeat, and snooze", "Caregiver alerts when a medicine is missed", "Medicine tracking with history and daily overview", "Caregiver dashboard with multiple profiles", "Encrypted, private health data", "Available on Google Play and the App Store"] },
};
