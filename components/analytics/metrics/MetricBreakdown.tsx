```typescript
"use client";

import { formatCurrency, formatNumber, formatPercentage } from "../utils/formatting";
import type { MetricBreakdown as MetricBreakdownType } from "../types";

interface MetricBreakdownProps {
  breakdown: MetricBreakdownType;
  total: number;
}

export function MetricBreakdown({ breakdown, total }: MetricBreakdownProps) {
  return (
    <div className="space-y-2">
      {Object.entries(breakdown).map(([key, value]) => (
        <div key={key} className="flex justify-between text-sm">
          <span className="text-gray-500 capitalize">{key}</span>
          <div className="text-right">
            <span>{typeof value === "number" ? formatNumber(value) : formatCurrency(value)}</span>
            <span className="ml-2 text-gray-400">
              ({formatPercentage(value, total)})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
```