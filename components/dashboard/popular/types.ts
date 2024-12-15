export interface ContentItem {
  title: string;
  views: number;
  shares: number;
  comments: number;
}

export interface ContentRowProps {
  item: ContentItem;
}