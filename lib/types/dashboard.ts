export type SortField = 'views' | 'shares' | 'comments' | 'reactions';

export interface Metric {
  id: string;
  label: string;
  value: number;
  change?: number;
  trend?: 'up' | 'down';
  icon: 'Eye' | 'Users' | 'DollarSign' | 'Share2' | 'MessageSquare' | 'Smile';
}

export interface Activity {
  id: string;
  type: 'article' | 'notification' | 'schedule';
  title: string;
  description: string;
  timestamp: Date;
  user?: {
    name: string;
    avatar: string;
  };
}

export interface CalendarEvent {
  id: string;
  title: string;
  type: 'meeting' | 'interview' | 'deadline';
  start: Date;
  end?: Date;
  description?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  type: 'update' | 'article';
  views: number;
  shares: number;
  comments: number;
  reactions: number;
}