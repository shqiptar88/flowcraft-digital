// src/components/Projects.tsx
import { Link } from "react-router-dom";

const items = [
  {
    tag: "LANDINGPAGE · ZAHNBLEACHING · CONVERSION",
    title: "Zahnarztpraxis München",
    subtitle: "Bleaching-Landingpage",
    text:
      "Neue Landingpage mit klarem Aufbau (Vorteile, Ablauf, FAQ) und technischem SEO-Grundlagen-Setup.",
    href: "/beispiele/bleachinglandingpage-muenchen",
  },
  // ...deine anderen Items
];

export default function Projects() {
  return (
    <section>
      {/* ...dein Header etc. */}

      <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.title}
            to={p.href}
            className={[
              "group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm transition",
              "hover:border-teal-200 hover:bg-teal-50",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40",
              "block",
            ].join(" ")}
          >
            <div className="text-xs font-semibold tracking-widest text-slate-500">
              {p.tag}
            </div>

            <h3 className="mt-3 text-base font-semibold text-slate-900">
              {p.title}
            </h3>

            <p className="text-sm text-slate-600">{p.subtitle}</p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {p.text}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}