"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { TemplateSortProps } from "./types";

export function TemplateSort({ value, onChange }: TemplateSortProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="name">Sort by Name</SelectItem>
        <SelectItem value="date">Sort by Date</SelectItem>
        <SelectItem value="usage">Sort by Usage</SelectItem>
      </SelectContent>
    </Select>
  );
}