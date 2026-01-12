import React from "react";
import SectionShell from "../SectionShell";

type Props = {
  id?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;   // z.B. "#contact" oder "/kontakt"
  secondaryLabel?: string;
  secondaryHref?: string; // z.B. "#services"
  variant?: "boxed" | string;
};

export default function CTA(props: Props) {
  const title = props.title ?? "Interesse an einem passenden Angebot?";
  const text =
    props.text ?? "Kurze Nachricht genügt — wir melden uns schnell zurück.";
  const primaryLabel = props.primaryLabel ?? "Unverbindliches Erstgespräch anfragen";
  const primaryHref = props.primaryHref ?? "#contact";
  const secondaryLabel = props.secondaryLabel ?? "So läuft’s ab";
  const secondaryHref = props.secondaryHref ?? "#services";

  return (
    <SectionShell id={props.id ?? "contact"}>
      <div className="card cardPad ctaBox">
        <h2 className="sectionTitle" style={{ marginBottom: 8 }}>{title}</h2>
        <p className="sectionLead" style={{ marginBottom: 18 }}>{text}</p>

        <div className="ctaRow">
          <a className="ctaPrimary" href={primaryHref}>{primaryLabel}</a>
          <a className="ctaSecondary" href={secondaryHref}>{secondaryLabel}</a>
        </div>
      </div>
    </SectionShell>
  );
}