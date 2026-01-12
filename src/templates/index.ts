// src/templates/index.ts
import HybridTemplate from "./HybridTemplate";
import BoldTemplate from "./BoldTemplate";

export type TemplateId = "hybrid" | "bold";

// Wenn du später wirklich ClassicTemplate/LuxTemplate als eigene Dateien baust,
// ergänzt du sie hier. Stand jetzt: es existieren sie nicht.
export function getTemplate(templateId: TemplateId) {
  switch (templateId) {
    case "bold":
      return BoldTemplate;
    case "hybrid":
    default:
      return HybridTemplate;
  }
}