// src/content/types.ts

export type Service = {
  title: string;
  description: string;
  icon?: string;
};

export type Hero = {
  title: string;
  subtitle: string;
  kicker?: string; // optional
  badge?: string; // optional (z.B. "Neu", "Premium")
  bullets?: string[]; // optional
};

export type USPItem = {
  title: string;
  text: string;
  icon?: string;
};

export type CTAContent = {
  title: string;
  subline?: string;
  buttonLabel?: string;
  buttonHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type Vertical = {
  slug: string;
  label: string;
  hero: Hero;
  services: Service[];

  // Optional — damit Hybrid WOW ohne Datenänderung läuft
  usps?: USPItem[];
  cta?: CTAContent;
};

export type VariantId = "default" | "dental" | "lux" | "classic";

// ThemePreset: wir machen es vollständig, damit alle verwendeten Klassen existieren
export type ThemePreset = {
  id: VariantId;

  // Page Layout
  pageBgClass: string;
  navClass: string;

  // Base
  accentClass: string;
  headingClass: string;
  bodyClass: string;
  mutedClass: string;

  // Buttons
  buttonClass: string; // legacy/compat
  buttonPrimaryClass: string;
  buttonSecondaryClass: string;

  // Cards / Surfaces
  cardClass: string;
  cardHoverClass: string;
  innerCardClass: string;
  ringClass: string;

  // Sections
  sectionBgClass: string;
  heroBgClass: string;
  heroGlowClass: string;
  sectionHeadingClass: string;

  // CTA
  ctaCardClass: string;

  // Small accents
  accentDotClass: string;
  brandAccentClass: string;
  glassRowClass: string;
};