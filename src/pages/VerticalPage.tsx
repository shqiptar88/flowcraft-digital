// src/pages/VerticalPage.tsx
import React from "react";
import { useSearchParams } from "react-router-dom";
import HybridTemplate from "../templates/HybridTemplate";
import { contentPacks, type ContentPackKey } from "../templates/contentPacks";
import {
  DEFAULT_FONT,
  DEFAULT_THEME,
  isFontKey,
  isThemeKey,
  themeForVertical,
  type FontKey,
  type ThemeKey,
} from "../templates/branding";

function isContentPackKey(v: string): v is ContentPackKey {
  return v in contentPacks;
}

// Mini ErrorBoundary, damit NIE wieder "weiß" ohne Hinweis passiert
class SectionErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: unknown }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown) {
    // eslint-disable-next-line no-console
    console.error("[VerticalPage] Render crashed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h2 style={{ fontWeight: 700 }}>Render-Fehler in einer Section</h2>
          <p style={{ marginTop: 8 }}>
            Schau in die Console. Der Fehler wurde geloggt.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function VerticalPage() {
  const [params] = useSearchParams();

  // ContentPack (Copy)
  const vParam = (params.get("v") ?? "dental").toLowerCase();
  const vKey: ContentPackKey = isContentPackKey(vParam) ? vParam : "dental";
  const overrides = contentPacks[vKey];

  // Theme / Font (Look & Feel)
  const themeParam = (params.get("theme") ?? "").toLowerCase();
  const fontParam = (params.get("font") ?? "").toLowerCase();

  // Wenn theme nicht gesetzt ist: aus v ableiten (dental/coach/trade)
  const theme: ThemeKey = themeParam
    ? (isThemeKey(themeParam) ? themeParam : DEFAULT_THEME)
    : themeForVertical(vKey);

  const font: FontKey = isFontKey(fontParam) ? fontParam : DEFAULT_FONT;

  // In deinem System aktuell fix:
  const layoutId = "leadOnepager";
  const templateId = "hybrid";

  return (
    <div data-theme={theme} data-font={font}>
      {import.meta.env.DEV && (
        <div
          style={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 9999,
            background: "rgba(15,23,42,.92)",
            color: "white",
            padding: "10px 12px",
            borderRadius: 12,
            fontSize: 12,
            lineHeight: 1.4,
            boxShadow: "0 8px 30px rgba(0,0,0,.25)",
            maxWidth: 260,
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            VerticalPage DEBUG
          </div>
          <div>v: {vKey}</div>
          <div>theme: {theme}</div>
          <div>font: {font}</div>
          <div>layout: {layoutId}</div>
          <div>template: {templateId}</div>
        </div>
      )}

      <SectionErrorBoundary>
        <HybridTemplate layoutId={layoutId} sectionOverrides={overrides} />
      </SectionErrorBoundary>
    </div>
  );
}