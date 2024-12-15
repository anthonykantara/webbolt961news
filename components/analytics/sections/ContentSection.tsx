```typescript
"use client";

import { Card } from "@/components/ui/card";
import { ContentList } from "../content/ContentList";
import { ContentSearch } from "../content/ContentSearch";
import { ContentFilters } from "../content/ContentFilters";
import { useContentData } from "../hooks/useContentData";
import type { DateRange } from "../types";

interface ContentSectionProps {
  dateRange: DateRange;
}

export function ContentSection({ dateRange }: ContentSectionProps) {
  const { items } = useContentData(dateRange);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Content Performance</h2>
        <div className="flex items-center gap-4">
          <ContentSearch />
          <ContentFilters />
        </div>
      </div>
      <ContentList items={items} />
    </Card>
  );
}
```