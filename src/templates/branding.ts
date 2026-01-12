// src/templates/branding.ts

export type ThemeKey = "dental" | "coach" | "trade" | "lux";
export type FontKey = "satoshi" | "space" | "proxima" | "generalSans";

export const DEFAULT_THEME: ThemeKey = "dental";
export const DEFAULT_FONT: FontKey = "satoshi";

export const themeKeys: ThemeKey[] = ["dental", "coach", "trade", "lux"];
export const fontKeys: FontKey[] = ["satoshi", "space", "proxima", "generalSans"];

export function isThemeKey(v: string): v is ThemeKey {
  return themeKeys.includes(v as ThemeKey);
}

export function isFontKey(v: string): v is FontKey {
  return fontKeys.includes(v as FontKey);
}

/**
 * Optional: Wenn du willst, dass theme/font automatisch
 * aus dem Vertical-Key abgeleitet werden (wenn nicht in URL gesetzt).
 */
export function themeForVertical(v: string): ThemeKey {
  if (isThemeKey(v)) return v;
  return DEFAULT_THEME;
}