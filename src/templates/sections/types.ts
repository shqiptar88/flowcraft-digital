// src/templates/sections/types.ts

/**
 * Alle erlaubten Section-Keys im System
 * → MUSS mit contentPacks.ts übereinstimmen
 */
export type SectionKey =
  | "hero"
  | "usp"
  | "services"
  | "proof"
  | "faq"
  | "cta";

/**
 * Generisches Override-System für Content Packs
 * Jede Section darf überschrieben werden
 */
export type SectionOverrides = Partial<
  Record<
    SectionKey,
    {
      [key: string]: any;
    }
  >
>;