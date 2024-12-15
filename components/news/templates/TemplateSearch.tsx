"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { TemplateSearchProps } from "./types";

export function TemplateSearch({ value, onChange }: TemplateSearchProps) {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        placeholder="Search templates..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}