```typescript
export interface DateRange {
  from: Date;
  to: Date;
}

export interface MetricBreakdown {
  app?: number;
  web?: number;
  advertising?: number;
  subscriptions?: number;
  donations?: number;
}

export interface UserTypes {
  registered: number;
  visitors: number;
}

export interface Metric {
  label: string;
  value: number;
  change: number;
  trend: "up" | "down";
  breakdown?: MetricBreakdown;
  userTypes?: UserTypes;
}

export interface ContentStats {
  views: number;
  reactions: number;
  comments: number;
  shares: number;
  revenue: number;
  newRegistrations: number;
  distribution: {
    app: number;
    web: number;
  };
  users: {
    registered: number;
    visitors: number;
  };
}

export interface ContentItem {
  id: string;
  title: string;
  type: "article" | "update" | "video";
  stats: ContentStats;
  section: string;
  topics: string[];
  publishedAt: Date;
  author: string;
  referrers: Array<{
    name: string;
    views: number;
  }>;
}
```