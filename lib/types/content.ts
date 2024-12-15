export type ContentType = "article" | "video" | "all";
export type ContentStatus = "draft" | "scheduled" | "published" | "all";
export type Language = "en" | "ar" | "fr";

export interface ContentMetrics {
  views: number;
  shares: number;
  comments: number;
  reactions: number;
}

export interface ContentUser {
  id: string;
  name: string;
  avatar: string;
  action?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  type: Exclude<ContentType, "all">;
  status: Exclude<ContentStatus, "all">;
  publishedAt: Date | null;
  modifiedAt: Date;
  metrics: ContentMetrics;
  authors: ContentUser[];
  activeUsers: ContentUser[];
}

export interface ContentFilters {
  search: string;
  type: ContentType;
  status: ContentStatus;
  dateRange: { from: Date; to: Date; } | null;
  authors: string[];
  language: Language;
}