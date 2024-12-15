"use client";

import { useState } from "react";
import { UpdatesList } from "@/components/updates/UpdatesList";
import { SearchBar } from "@/components/updates/SearchBar";
import { LanguageSelector } from "@/components/updates/LanguageSelector";
import type { Language } from "@/lib/types/updates";

export default function UpdatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Updates</h1>
        <div className="flex items-center gap-4">
          <LanguageSelector
            value={selectedLanguage}
            onChange={setSelectedLanguage}
          />
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            language={selectedLanguage}
          />
        </div>
      </div>
      <UpdatesList
        searchQuery={searchQuery}
        language={selectedLanguage}
      />
    </div>
  );
}