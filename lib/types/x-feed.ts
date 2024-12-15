export interface XSource {
  id: string;
  name: string;
  type: 'account' | 'hashtag';
  isActive: boolean;
}

export interface XPost {
  id: string;
  content: string;
  source: {
    id: string;
    name: string;
    type: 'account' | 'hashtag';
  };
  publishedAt: Date;
  url: string;
}