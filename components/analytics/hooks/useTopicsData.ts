```typescript
"use client";

import { useMemo } from "react";
import type { DateRange } from "../types";

interface TopicData {
  name: string;
  views: number;
  revenue: number;
  engagement: number;
}

interface SectionData {
  name: string;
  views: number;
  revenue: number;
  engagement: number;
}

export function useTopicsData(dateRange: DateRange) {
  const topics = useMemo<TopicData[]>(() => [
    {
      name: "Politics",
      views: 125000,
      revenue: 4500,
      engagement: 78
    },
    {
      name: "Economy",
      views: 98000,
      revenue: 3800,
      engagement: 82
    }
  ], []);

  const sections = useMemo<SectionData[]>(() => [
    {
      name: "News",
      views: 450000,
      revenue: 15000,
      engagement: 75
    },
    {
      name: "Business",
      views: 280000,
      revenue: 9500,
      engagement: 70
    }
  ], []);

  return { topics, sections };
}
```