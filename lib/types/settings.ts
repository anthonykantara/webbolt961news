export interface Language {
  code: string;
  name: string;
  direction: "ltr" | "rtl";
  isActive: boolean;
}

export interface LogoSettings {
  dashboard: string | null;
  frontend: string | null;
}

export interface TranslationSettings {
  prompt: string;
}

export interface PromptsSettings {
  updates: {
    run: string;
  };
  featuredImage: {
    generate: string;
  };
  content: {
    editor: string;
    seo: string;
    categorization: string;
  };
}