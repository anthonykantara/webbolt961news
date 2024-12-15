export type Language = "en" | "ar" | "fr";

export interface UpdateContent {
  title: string;
  content: string;
}

export interface Update {
  id: string;
  content: Record<Language, UpdateContent>;
  lastModified: Date;
  languages: Language[];
}

export interface UpdateFormData {
  en: UpdateContent;
  ar: UpdateContent;
  fr: UpdateContent;
}