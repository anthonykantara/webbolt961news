"use client";

import { LanguageSelector } from "../language/LanguageSelector";
import { SearchBar } from "../search/SearchBar";
import type { Language } from "@/lib/types/updates";

interface UpdatesHeaderProps {
  searchQuery: string;
  selectedLanguage: Language;
  onSearchChange: (value: string) => void;
  onLanguageChange: (language: Language) => void;
}

export function UpdatesHeader({
  searchQuery,
  selectedLanguage,
  onSearchChange,
  onLanguageChange
}: UpdatesHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold text-gray-900">Updates</h1>
      <div className="flex items-center gap-4">
        <LanguageSelector
          value={selectedLanguage}
          onChange={onLanguageChange}
        />
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          language={selectedLanguage}
        />
      </div>
    </div>
  );
}