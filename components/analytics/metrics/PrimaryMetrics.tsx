```typescript
"use client";

import { Card } from "@/components/ui/card";
import { useMetrics } from "../hooks/useMetrics";
import { MetricBreakdown } from "./MetricBreakdown";
import { UserTypeBreakdown } from "./UserTypeBreakdown";
import { TrendingIndicator } from "./TrendingIndicator";

export function PrimaryMetrics() {
  const { metrics } = useMetrics();

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{metric.label}</p>
              <TrendingIndicator trend={metric.trend} change={metric.change} />
            </div>

            <p className="text-2xl font-semibold">
              {metric.formattedValue}
            </p>

            {metric.breakdown && (
              <MetricBreakdown 
                breakdown={metric.breakdown} 
                total={metric.value} 
              />
            )}
            
            {metric.userTypes && (
              <UserTypeBreakdown 
                userTypes={metric.userTypes} 
              />
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
```