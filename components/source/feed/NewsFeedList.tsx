"use client";

import { NewsFeedItem } from "./NewsFeedItem";
import { Skeleton } from "@/components/ui/skeleton";
import type { NewsItem } from "@/lib/types/news-feed";

interface NewsFeedListProps {
  items: NewsItem[];
  isLoading: boolean;
}

export function NewsFeedList({ items, isLoading }: NewsFeedListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-8 w-full" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No news items available. Try activating more sources.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <NewsFeedItem key={item.id} item={item} />
      ))}
    </div>
  );
}