"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import type { Language } from "@/lib/types/article";

interface LanguageListProps {
  languages: Language[];
  selectedLanguage: string | null;
  onSelect: (code: string) => void;
  translatedLanguages: Set<string>;
}

export function LanguageList({
  languages,
  selectedLanguage,
  onSelect,
  translatedLanguages
}: LanguageListProps) {
  return (
    <div className="space-y-1">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => onSelect(language.code)}
          className={cn(
            "w-full px-3 py-2 rounded-lg text-sm text-left",
            "transition-colors duration-200",
            "flex items-center justify-between gap-2",
            selectedLanguage === language.code
              ? "bg-red-50 text-red-600"
              : "hover:bg-gray-50"
          )}
        >
          <span>{language.name}</span>
          {translatedLanguages.has(language.code) && (
            <Check className="h-4 w-4 text-green-500" />
          )}
        </button>
      ))}
    </div>
  );
}