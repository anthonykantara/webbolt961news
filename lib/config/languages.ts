export const LANGUAGES = {
  en: "English",
  ar: "العربية",
  fr: "Français"
} as const;

export type Language = keyof typeof LANGUAGES;

export const PLACEHOLDERS = {
  search: {
    en: "Search updates...",
    ar: "البحث عن التحديثات...",
    fr: "Rechercher des mises à jour..."
  }
} as const;