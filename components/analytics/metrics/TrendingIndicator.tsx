```typescript
"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendingIndicatorProps {
  trend: "up" | "down";
  change: number;
}

export function TrendingIndicator({ trend, change }: TrendingIndicatorProps) {
  return (
    <div className={cn(
      "flex items-center text-sm",
      trend === "up" ? "text-green-600" : "text-red-600"
    )}>
      {trend === "up" ? (
        <TrendingUp className="h-4 w-4 mr-1" />
      ) : (
        <TrendingDown className="h-4 w-4 mr-1" />
      )}
      {change}%
    </div>
  );
}
```