import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import { LanguageList } from "./LanguageList";
import type { Language, DetectedLanguage } from "@/lib/types/article";

interface TranslationSidebarProps {
  languages: Language[];
  selectedLanguage: string | null;
  onLanguageSelect: (code: string) => void;
  translatedLanguages: Set<string>;
  detectedLanguage: DetectedLanguage;
  onTranslate: () => void;
  isTranslating: boolean;
}

export function TranslationSidebar({
  languages,
  selectedLanguage,
  onLanguageSelect,
  translatedLanguages,
  detectedLanguage,
  onTranslate,
  isTranslating
}: TranslationSidebarProps) {
  return (
    <div className="w-[188px] border-r border-gray-100 p-4 flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Language</h3>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">{detectedLanguage.name}</span>
        </div>
      </div>

      <Button
        onClick={onTranslate}
        disabled={isTranslating || translatedLanguages.size === languages.length}
        className={cn(
          "w-[156px] mb-6 relative overflow-hidden transition-all duration-300",
          "bg-gradient-to-r from-[#FF0000] via-[#FF2B2B] to-[#FF5555]",
          "hover:from-[#E60000] hover:via-[#E62B2B] hover:to-[#E65555]",
          "shadow-[0_0_20px_rgba(255,0,0,0.15)]",
          "hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]",
          "border border-red-400/30",
          "font-medium tracking-wide",
          isTranslating && "animate-pulse",
          translatedLanguages.size === languages.length && "opacity-50"
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
        <div className="relative flex items-center justify-center gap-2">
          <Sparkles className={cn(
            "h-4 w-4 transition-transform",
            isTranslating && "animate-spin"
          )} />
          <span className="text-white text-sm">
            {isTranslating ? "Translating..." : "Translate with Arze"}
          </span>
        </div>
      </Button>

      <LanguageList
        languages={languages}
        selectedLanguage={selectedLanguage}
        onSelect={onLanguageSelect}
        translatedLanguages={translatedLanguages}
      />
    </div>
  );
}