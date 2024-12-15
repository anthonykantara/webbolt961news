export const NEWS_FEED = {
  REFRESH_INTERVAL: 30000, // 30 seconds
  MAX_ITEMS: 50,
  MIN_SOURCE_NAME_LENGTH: 3,
  STORAGE_KEYS: {
    SOURCES: 'news-sources',
    PREFERENCES: 'news-preferences'
  }
} as const;

export const PLACEHOLDERS = {
  NEWS_FEED: {
    SEARCH: 'Search news...',
    SOURCE_NAME: 'Enter source name',
    SOURCE_URL: 'Enter source URL (https://...)'
  }
} as const;