```typescript
"use client";

import { useMemo } from "react";
import { formatCurrency, formatNumber } from "../utils/formatting";
import type { Metric } from "../types";

export function useMetrics() {
  const metrics = useMemo<Metric[]>(() => [
    {
      label: "Views",
      value: 34567,
      formattedValue: formatNumber(34567),
      change: 12.5,
      trend: "up",
      breakdown: {
        app: 15234,
        web: 19333
      },
      userTypes: {
        registered: 12345,
        visitors: 22222,
        newRegistrations: 150
      }
    },
    {
      label: "Revenue",
      value: 15420,
      formattedValue: formatCurrency(15420),
      change: 25,
      trend: "up",
      breakdown: {
        advertising: 8450,
        subscriptions: 4970,
        donations: 2000
      }
    }
  ], []);

  return { metrics };
}
```