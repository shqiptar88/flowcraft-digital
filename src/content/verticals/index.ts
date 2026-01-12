// src/content/verticals/index.ts
import type { Vertical } from "../types";

import { dentist } from "./dentist";
// später: import { coach } from "./coach";
// später: import { handwerk } from "./handwerk";

export const VERTICALS = {
  dentist,
  // coach,
  // handwerk,
} as const;

export type VerticalId = keyof typeof VERTICALS;

export const verticalList: Vertical[] = Object.values(VERTICALS);

export function getVertical(id: string): Vertical {
  const key = id as VerticalId;
  return VERTICALS[key] ?? dentist; // fallback
}