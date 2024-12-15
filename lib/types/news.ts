export const NEWS_PRIORITIES = {
  CRITICAL: 'critical',
  HIGH: 'high',
  NORMAL: 'normal',
} as const;

export type NewsPriority = typeof NEWS_PRIORITIES[keyof typeof NEWS_PRIORITIES];

export interface NewsTemplate {
  id: string;
  text: string;
  isVisible?: boolean;
}

export interface NewsContent {
  title: string;
  content: string;
  priority: NewsPriority;
}