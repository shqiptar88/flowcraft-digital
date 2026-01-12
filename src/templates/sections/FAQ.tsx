import React, { useMemo, useState } from "react";
import SectionShell from "../SectionShell";

type FAQItem = { q: string; a: string };

type Props = {
  id?: string;
  title?: string;
  heading?: string;       // falls du noch alte Packs hast
  variant?: string;       // falls du noch alte Packs hast
  layout?: "oneColumn" | "twoColumn" | string;
  items?: FAQItem[];
};

export default function FAQ(props: Props) {
  const title = props.title ?? props.heading ?? "FAQ";
  const layout = (props.layout ?? props.variant ?? "oneColumn") as string;
  const items = Array.isArray(props.items) ? props.items : [];

  // Guard: wenn keine Items da sind, Section nicht rendern
  if (items.length === 0) return null;

  const isTwoCol = layout === "twoColumn" || layout === "two-col" || layout === "2col";

  return (
    <SectionShell id={props.id ?? "faq"}>
      <h2 className="sectionTitle">{title}</h2>
      <p className="sectionLead">
        Kurz & klar beantwortet – damit du sofort weißt, wie wir arbeiten.
      </p>

      <div className={isTwoCol ? "faqGrid" : ""}>
        {items.map((it, idx) => (
          <FAQRow key={`${it.q}-${idx}`} q={it.q} a={it.a} />
        ))}
      </div>
    </SectionShell>
  );
}

function FAQRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card faqItem">
      <button
        type="button"
        className="faqBtn"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className="faqQ">{q}</span>
        <span className="faqIcon">{open ? "–" : "+"}</span>
      </button>

      {open && (
        <div className="faqAWrap">
          <p className="faqA">{a}</p>
        </div>
      )}
    </div>
  );
}