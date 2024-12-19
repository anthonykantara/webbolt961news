export interface Section {
  id: string;
  name: string;
  translations: {
    ar?: string;
    fr?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Topic {
  id: string;
  name: string;
  translations: {
    ar?: string;
    fr?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}