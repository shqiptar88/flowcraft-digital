export * from "./types";

export * from "./verticals";
export * from "./themes";

import { dentist } from "./verticals/dentist";
// import { coach } from "./verticals/coach"; // Beispiel
import { dentalTheme } from "./themes/dental";
// import { coachTheme } from "./themes/coach"; // Beispiel

import type { Vertical, ThemePreset } from "./types";

/** Registry */
const VERTICALS: Record<string, Vertical> = {
  dentist,
  // coach,
};

const THEMES: Record<string, ThemePreset> = {
  dental: dentalTheme,
  // coach: coachTheme,
};

export function getVertical(id: string): Vertical {
  return VERTICALS[id] ?? VERTICALS["dentist"];
}

export function getTheme(id: string): ThemePreset {
  return THEMES[id] ?? THEMES["dental"];
}

/** ✅ B: Auswahl-Logik über URL (?v=...&t=...) */
export function getSelectedConfig() {
  const url = new URL(window.location.href);
  const v = (url.searchParams.get("v") || "dentist").trim();
  const t = (url.searchParams.get("t") || "dental").trim();

  return {
    verticalId: v,
    themeId: t,
    vertical: getVertical(v),
    theme: getTheme(t),
  };
}