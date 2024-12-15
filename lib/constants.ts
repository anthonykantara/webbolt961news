// News priorities
export const NEWS_PRIORITIES = {
  CRITICAL: 'critical',
  HIGH: 'high',
  NORMAL: 'normal',
} as const;

export type NewsPriority = typeof NEWS_PRIORITIES[keyof typeof NEWS_PRIORITIES];

// Date formats
export const DATE_FORMAT = 'MM/dd/yyyy';

// Default values
export const DEFAULT_NEWS = {
  title: 'Airstrike in Dahye',
  subtitle: 'MK heard about Beirut and Mount Lebanon',
  priority: NEWS_PRIORITIES.NORMAL,
} as const;