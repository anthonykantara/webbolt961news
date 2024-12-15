export interface NewsItem {
  id: string;
  headline: string;
  url: string;
  source: {
    id: string;
    name: string;
  };
  publishedAt: Date;
}

export interface NewsSource {
  id: string;
  name: string;
  url: string;
  isActive: boolean;
}