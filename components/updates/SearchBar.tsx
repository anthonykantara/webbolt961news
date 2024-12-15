"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import type { Language } from "@/lib/types/updates";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  language: Language;
}

export function SearchBar({ value, onChange, language }: SearchBarProps) {
  const placeholders = {
    en: "Search updates...",
    ar: "البحث عن التحديثات...",
    fr: "Rechercher des mises à jour..."
  };

  return (
    <div className="relative w-[350px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholders[language]}
        className="pl-9 pr-9"
        dir={language === "ar" ? "rtl" : "ltr"}
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
          onClick={() => onChange("")}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}