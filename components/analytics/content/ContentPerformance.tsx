```typescript
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ContentTable } from "./ContentTable";
import { ContentSearch } from "./ContentSearch";
import { ContentFilters } from "./ContentFilters";
import { useContentData } from "../hooks/useContentData";
import type { DateRange } from "../types";

interface ContentPerformanceProps {
  dateRange: DateRange;
}

export function ContentPerformance({ dateRange }: ContentPerformanceProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { items } = useContentData(dateRange);

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Content Performance</h2>
        <div className="flex items-center gap-4">
          <ContentSearch value={searchQuery} onChange={setSearchQuery} />
          <ContentFilters />
        </div>
      </div>
      <ContentTable items={filteredItems} />
    </Card>
  );
}
```