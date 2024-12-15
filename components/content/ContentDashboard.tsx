"use client";

import { useState } from "react";
import { ContentHeader } from "./header/ContentHeader";
import { ContentTable } from "./table/ContentTable";
import { useContentData } from "@/lib/hooks/useContentData";
import type { ContentFilters } from "@/lib/types/content";

export function ContentDashboard() {
  const [filters, setFilters] = useState<ContentFilters>({
    search: "",
    type: "all",
    status: "all",
    dateRange: null,
    authors: [],
    language: "en"
  });

  const { items, isLoading } = useContentData(filters);

  return (
    <div className="p-6">
      <ContentHeader filters={filters} onFiltersChange={setFilters} />
      <ContentTable items={items} isLoading={isLoading} />
    </div>
  );
}