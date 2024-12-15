import { NewsPriority } from '../types/news';

export const NEWS_PRIORITIES: Record<string, NewsPriority> = {
  CRITICAL: 'critical',
  HIGH: 'high',
  NORMAL: 'normal',
} as const;

export const DEFAULT_NEWS = {
  title: 'Airstrike in Dahye',
  subtitle: 'MK heard about Beirut and Mount Lebanon',
  priority: NEWS_PRIORITIES.NORMAL,
} as const;