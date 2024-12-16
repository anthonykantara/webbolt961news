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

export interface ContentTypeIcon {
  icon: JSX.Element;
  label: string;
}