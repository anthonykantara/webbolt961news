```typescript
"use client";

import { useMemo } from "react";
import type { ContentItem, DateRange } from "../types";

export function useContentData(dateRange: DateRange) {
  const items = useMemo<ContentItem[]>(() => [
    {
      id: "1",
      title: "Breaking: Major development in downtown Beirut",
      type: "update",
      stats: {
        views: 12500,
        revenue: 450,
        reactions: 890,
        comments: 234,
        shares: 567,
        newRegistrations: 150,
        distribution: {
          app: 5500,
          web: 7000
        },
        users: {
          registered: 4000,
          visitors: 6000
        }
      },
      section: "News",
      topics: ["Politics", "Beirut"],
      publishedAt: new Date(),
      author: "John Smith",
      referrers: [
        { name: "Facebook", views: 3500 },
        { name: "Twitter", views: 2800 },
        { name: "Google", views: 1200 }
      ]
    }
  ], []);

  return { items };
}
```