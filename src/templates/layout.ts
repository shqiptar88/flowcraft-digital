// src/templates/layout.ts
import type { LayoutDef } from "./types";

export const layouts: Record<string, LayoutDef> = {
  leadOnepager: {
    id: "leadOnepager",
    name: "Lead Onepager",
    sections: [
      { key: "lead" },
      { key: "usp" },
      { key: "services" },
      { key: "proof" },
      { key: "faq" },
      { key: "cta" },
    ],
  },

  multiPageLight: {
    id: "multiPageLight",
    name: "Multi Page Light",
    sections: [
      { key: "lead" },
      { key: "services" },
      { key: "proof" },
      { key: "cta" },
    ],
  },
};