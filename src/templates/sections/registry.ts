// src/templates/sections/registry.ts
import type { SectionDefinition, SectionKey } from "./types";

import Hero from "./Hero";
import USP from "./USP";
import Services from "./Services";
import Proof from "./Proof";
import FAQ from "./FAQ";
import CTA from "./CTA";

export const registry: Record<SectionKey, SectionDefinition> = {
  lead: {
    key: "lead",
    component: Hero,
  },
  usp: {
    key: "usp",
    component: USP,
  },
  services: {
    key: "services",
    component: Services,
  },
  proof: {
    key: "proof",
    component: Proof,
  },
  faq: {
    key: "faq",
    component: FAQ,
  },
  cta: {
    key: "cta",
    component: CTA,
  },
};