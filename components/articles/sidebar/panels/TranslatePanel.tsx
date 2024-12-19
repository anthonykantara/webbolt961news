"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import { TranslationSidebar } from "./translate/TranslationSidebar";
import { TranslationContent } from "./translate/TranslationContent";
import type { Language, DetectedLanguage } from "@/lib/types/article";

const LANGUAGES: Language[] = [
  { code: "fr", name: "Français", direction: "ltr" },
  { code: "ar", name: "العربية", direction: "rtl" },
  { code: "es", name: "Español", direction: "ltr" }
];

export function TranslatePanel() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedLanguages, setTranslatedLanguages] = useState<Set<string>>(new Set());
  const [detectedLanguage] = useState<DetectedLanguage>({
    code: "en",
    name: "English",
    confidence: 0.98
  });

  const handleTranslate = async () => {
    setIsTranslating(true);
    // Simulate translation process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setTranslatedLanguages(new Set(LANGUAGES.map(lang => lang.code)));
    setIsTranslating(false);
  };

  return (
    <div className="h-full flex">
      <TranslationSidebar
        languages={LANGUAGES}
        selectedLanguage={selectedLanguage}
        onLanguageSelect={setSelectedLanguage}
        translatedLanguages={translatedLanguages}
        detectedLanguage={detectedLanguage}
        onTranslate={handleTranslate}
        isTranslating={isTranslating}
      />
      <TranslationContent
        sourceLanguage={detectedLanguage}
        targetLanguage={selectedLanguage ? LANGUAGES.find(l => l.code === selectedLanguage)! : null}
        isTranslated={selectedLanguage ? translatedLanguages.has(selectedLanguage) : false}
      />
    </div>
  );
}