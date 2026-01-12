// src/content/themes/index.ts
import type { ThemePreset, VariantId } from "../types";

const defaultTheme: ThemePreset = {
  id: "default",

  pageBgClass: "bg-white",
  navClass: "bg-white/80 backdrop-blur border-b border-slate-200",

  accentClass: "text-teal-700",
  headingClass: "text-slate-900",
  bodyClass: "text-slate-700",
  mutedClass: "text-slate-500",

  buttonClass: "bg-teal-600 hover:bg-teal-700 text-white",
  buttonPrimaryClass:
    "bg-teal-600 hover:bg-teal-700 text-white shadow-sm",
  buttonSecondaryClass:
    "bg-slate-900 hover:bg-slate-800 text-white shadow-sm",

  cardClass: "border border-slate-200 bg-white shadow-sm",
  cardHoverClass: "hover:shadow-md hover:-translate-y-0.5 transition",
  innerCardClass: "bg-white",
  ringClass: "ring-1 ring-black/5",

  sectionBgClass: "bg-slate-50",
  heroBgClass: "bg-white",
  heroGlowClass: "from-teal-400/30 via-sky-400/20 to-transparent",
  sectionHeadingClass: "text-slate-900",

  ctaCardClass: "border border-slate-200 bg-white shadow-sm",

  accentDotClass: "bg-teal-500",
  brandAccentClass: "text-teal-700",
  glassRowClass: "bg-white/70 backdrop-blur border border-slate-200",
};

const dentalTheme: ThemePreset = {
  ...defaultTheme,
  id: "dental",
  accentClass: "text-sky-700",
  buttonClass: "bg-sky-600 hover:bg-sky-700 text-white",
  buttonPrimaryClass: "bg-sky-600 hover:bg-sky-700 text-white shadow-sm",
  brandAccentClass: "text-sky-700",
  accentDotClass: "bg-sky-500",
  heroGlowClass: "from-sky-400/30 via-teal-400/15 to-transparent",
};

const luxTheme: ThemePreset = {
  ...defaultTheme,
  id: "lux",

  pageBgClass: "bg-[#070A12]",
  navClass: "bg-black/40 backdrop-blur border-b border-white/10",

  accentClass: "text-white",
  headingClass: "text-white",
  bodyClass: "text-white/75",
  mutedClass: "text-white/55",

  buttonClass: "bg-white text-black hover:bg-white/90",
  buttonPrimaryClass: "bg-white text-black hover:bg-white/90 shadow",
  buttonSecondaryClass:
    "bg-white/10 text-white hover:bg-white/15 border border-white/10",

  cardClass: "bg-white/5 border border-white/10 backdrop-blur",
  cardHoverClass: "hover:bg-white/7 hover:border-white/15 transition",
  innerCardClass: "bg-white/5",
  ringClass: "ring-1 ring-white/10",

  sectionBgClass: "bg-black/20",
  heroBgClass: "bg-transparent",
  heroGlowClass: "from-indigo-500/30 via-fuchsia-500/15 to-transparent",
  sectionHeadingClass: "text-white",

  ctaCardClass: "bg-white/6 border border-white/12 backdrop-blur",

  accentDotClass: "bg-white",
  brandAccentClass: "text-white",
  glassRowClass: "bg-white/5 backdrop-blur border border-white/10",
};

const classicTheme: ThemePreset = {
  ...defaultTheme,
  id: "classic",
  accentClass: "text-slate-900",
  buttonClass: "bg-slate-900 hover:bg-slate-800 text-white",
  buttonPrimaryClass: "bg-slate-900 hover:bg-slate-800 text-white shadow-sm",
  brandAccentClass: "text-slate-900",
  accentDotClass: "bg-slate-900",
  heroGlowClass: "from-slate-300/25 via-slate-200/10 to-transparent",
};

const THEMES: Record<VariantId, ThemePreset> = {
  default: defaultTheme,
  dental: dentalTheme,
  lux: luxTheme,
  classic: classicTheme,
};

export function getTheme(id: VariantId): ThemePreset {
  return THEMES[id] ?? THEMES.default;
}