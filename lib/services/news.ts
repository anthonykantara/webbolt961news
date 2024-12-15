import type { NewsItem, NewsSource } from "@/lib/types/news-feed";

// Mock data for demonstration
const MOCK_ITEMS: NewsItem[] = [
  {
    id: "1",
    headline: "Breaking: Major development in downtown Beirut",
    url: "https://example.com/article1",
    source: { id: "1", name: "Lebanon News" },
    publishedAt: new Date()
  },
  {
    id: "2",
    headline: "Traffic disruption due to ongoing protests",
    url: "https://example.com/article2",
    source: { id: "2", name: "Beirut Daily" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 30)
  }
];

export async function fetchNewsItems(sources: NewsSource[]): Promise<NewsItem[]> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return MOCK_ITEMS.filter(item => 
    sources.some(source => source.id === item.source.id && source.isActive)
  );
}

export async function runNewsItem(itemId: string): Promise<void> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log('Item run successfully:', itemId);
}