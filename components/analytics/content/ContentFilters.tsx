"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import type { ContentSortField } from "../utils/types";

interface ContentFiltersProps {
  sortField: ContentSortField;
  onSortFieldChange: (field: ContentSortField) => void;
  sortDirection: "asc" | "desc";
  onSortDirectionChange: (direction: "asc" | "desc") => void;
}

export function ContentFilters({
  sortField,
  onSortFieldChange,
  sortDirection,
  onSortDirectionChange
}: ContentFiltersProps) {
  return (
    <div className="flex items-center gap-4">
      <Select value={sortField} onValueChange={(value) => onSortFieldChange(value as ContentSortField)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="revenue">Revenue</SelectItem>
          <SelectItem value="views">Views</SelectItem>
          <SelectItem value="engagement">Engagement</SelectItem>
          <SelectItem value="revenuePerView">Revenue per View</SelectItem>
          <SelectItem value="date">Date</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onSortDirectionChange(sortDirection === "asc" ? "desc" : "asc")}
      >
        <ArrowUpDown className="h-4 w-4" />
      </Button>
    </div>
  );
}