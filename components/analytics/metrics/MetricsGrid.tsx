```typescript
"use client";

import { Card } from "@/components/ui/card";
import { MetricCard } from "./MetricCard";
import { useMetrics } from "../hooks/useMetrics";
import type { DateRange } from "../types";

interface MetricsGridProps {
  dateRange: DateRange;
}

export function MetricsGrid({ dateRange }: MetricsGridProps) {
  const { metrics } = useMetrics(dateRange);

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}
```