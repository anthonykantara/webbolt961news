"use client";

import { useState } from "react";

interface Settings {
  prompts: {
    updates: {
      run: string;
    };
    translation: string;
    content: {
      editor: string;
      seo: string;
      categorization: string;
    };
  };
}

// Mock default settings
const DEFAULT_SETTINGS: Settings = {
  prompts: {
    updates: {
      run: "Generate a news update based on the following content: {{content}}"
    },
    translation: "Translate the following content to {{language}}: {{content}}",
    content: {
      editor: "Analyze and improve the following content: {{content}}",
      seo: "Generate SEO metadata for: {{content}}",
      categorization: "Suggest categories for: {{content}}"
    }
  }
};

export function useSettings() {
  const [settings] = useState<Settings>(DEFAULT_SETTINGS);

  return { settings };
}