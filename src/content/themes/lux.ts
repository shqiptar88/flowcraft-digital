import type { ThemePreset } from "../types";

export const luxTheme: ThemePreset = {
  id: "lux",
  pageBgClass: "bg-slate-950",
  surfaceClass: "bg-white/6 backdrop-blur-md",
  headingClass: "text-white tracking-tight",
  bodyClass: "text-white/70",
  accentTextClass: "text-amber-300",
  buttonPrimaryClass: "bg-amber-300 hover:bg-amber-200 text-slate-950",
  buttonSecondaryClass: "bg-white/10 hover:bg-white/15 text-white",
  borderClass: "border border-white/10",
  shadowClass: "shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
  decoTopClass:
    "bg-[radial-gradient(50%_50%_at_15%_10%,rgba(251,191,36,0.22),transparent_60%),radial-gradient(45%_45%_at_80%_0%,rgba(45,212,191,0.18),transparent_60%)]",
};