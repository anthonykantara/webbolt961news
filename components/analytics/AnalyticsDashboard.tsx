```typescript
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MetricsSection } from "./sections/MetricsSection";
import { ContentSection } from "./sections/ContentSection";
import { TopicsSection } from "./sections/TopicsSection";
import { DateRangePicker } from "./filters/DateRangePicker";
import { AnalyticsFilters } from "./filters/AnalyticsFilters";

export function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date()
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <div className="flex items-center gap-4">
          <DateRangePicker value={dateRange} onChange={setDateRange} />
          <AnalyticsFilters />
        </div>
      </div>

      <MetricsSection dateRange={dateRange} />
      <ContentSection dateRange={dateRange} />
      <TopicsSection dateRange={dateRange} />
    </div>
  );
}
```