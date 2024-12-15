export interface WebsiteSource {
  id: string;
  name: string;
  url: string;
  isActive: boolean;
}

export interface FeedItem {
  id: string;
  headline: string;
  source: {
    id: string;
    name: string;
  };
  publishedAt: Date;
  url: string;
}