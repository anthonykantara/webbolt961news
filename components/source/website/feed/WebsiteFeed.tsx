"use client";

import { FeedItem } from "./FeedItem";
import type { WebsiteSource, FeedItem as FeedItemType } from "@/lib/types/website-feed";

// Dummy data
const MOCK_ITEMS: FeedItemType[] = [
  {
    id: "1",
    headline: "Breaking: Major development in downtown Beirut",
    source: { id: "1", name: "Lebanon News" },
    publishedAt: new Date(Date.now() - 1000 * 30), // 30 seconds ago
    url: "https://example.com/1"
  },
  {
    id: "2",
    headline: "Traffic disruption due to ongoing protests",
    source: { id: "2", name: "Beirut Daily" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    url: "https://example.com/2"
  },
  {
    id: "3",
    headline: "Weather Alert: Heavy storms expected tonight",
    source: { id: "1", name: "Lebanon News" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    url: "https://example.com/3"
  },
  {
    id: "4",
    headline: "New cultural center opens in Hamra",
    source: { id: "3", name: "Beirut Culture" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    url: "https://example.com/4"
  },
  {
    id: "5",
    headline: "Local startup receives major investment",
    source: { id: "2", name: "Beirut Daily" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    url: "https://example.com/5"
  },
  {
    id: "6",
    headline: "Restaurant Week returns to Beirut",
    source: { id: "3", name: "Beirut Culture" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    url: "https://example.com/6"
  },
  {
    id: "7",
    headline: "Tech conference announces dates for 2024",
    source: { id: "1", name: "Lebanon News" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    url: "https://example.com/7"
  },
  {
    id: "8",
    headline: "New public transport routes announced",
    source: { id: "2", name: "Beirut Daily" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    url: "https://example.com/8"
  },
  {
    id: "9",
    headline: "Art exhibition opens at National Museum",
    source: { id: "3", name: "Beirut Culture" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 25), // 25 hours ago
    url: "https://example.com/9"
  },
  {
    id: "10",
    headline: "Municipality announces infrastructure project",
    source: { id: "1", name: "Lebanon News" },
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 26), // 26 hours ago
    url: "https://example.com/10"
  }
];

interface WebsiteFeedProps {
  sources: WebsiteSource[];
}

export function WebsiteFeed({ sources }: WebsiteFeedProps) {
  const activeSourceIds = new Set(sources.filter(s => s.isActive).map(s => s.id));
  
  const filteredItems = MOCK_ITEMS
    .filter(item => activeSourceIds.has(item.source.id))
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  if (filteredItems.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No updates available. Try activating more sources.
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100">
      {filteredItems.map((item) => (
        <FeedItem
          key={item.id}
          item={item}
          onRun={() => console.log('Running item:', item.id)}
        />
      ))}
    </div>
  );
}