"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LANGUAGES, type Language } from "@/lib/config/languages";

interface LanguageSelectorProps {
  value: Language;
  onChange: (value: Language) => void;
}

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(LANGUAGES).map(([code, label]) => (
          <SelectItem key={code} value={code as Language}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}