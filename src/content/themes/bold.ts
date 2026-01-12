import type { ThemePreset } from "../types";

export const boldTheme: ThemePreset = {
  id: "bold",
  pageBgClass: "bg-slate-950",
  surfaceClass: "bg-white/5 backdrop-blur",
  headingClass: "text-white tracking-tight",
  bodyClass: "text-white/70",
  accentTextClass: "text-teal-300",
  buttonPrimaryClass: "bg-teal-400 hover:bg-teal-300 text-slate-950",
  buttonSecondaryClass: "bg-white/10 hover:bg-white/15 text-white",
  borderClass: "border border-white/10",
  shadowClass: "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
  decoTopClass:
    "bg-[radial-gradient(60%_60%_at_20%_10%,rgba(45,212,191,0.35),transparent_60%),radial-gradient(45%_45%_at_80%_0%,rgba(56,189,248,0.25),transparent_60%)]",
};