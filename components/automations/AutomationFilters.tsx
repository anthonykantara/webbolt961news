"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SortField } from "@/lib/types/automation";

interface AutomationFiltersProps {
  sortField: SortField;
  onSortChange: (field: SortField) => void;
}

export function AutomationFilters({
  sortField,
  onSortChange
}: AutomationFiltersProps) {
  return (
    <div className="flex items-center gap-4">
      <Select value={sortField} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="status">Sort by Status</SelectItem>
          <SelectItem value="type">Sort by Type</SelectItem>
          <SelectItem value="createdAt">Sort by Creation Date</SelectItem>
          <SelectItem value="lastRun">Sort by Last Run</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}