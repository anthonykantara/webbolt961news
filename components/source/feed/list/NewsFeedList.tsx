"use client";

import { NewsFeedItem } from "./NewsFeedItem";
import { LoadingState } from "./LoadingState";
import { EmptyState } from "./EmptyState";
import type { NewsItem } from "@/lib/types/news-feed";

interface NewsFeedListProps {
  items: NewsItem[];
  isLoading: boolean;
  onRunItem?: (itemId: string) => void;
}

export function NewsFeedList({ items, isLoading, onRunItem }: NewsFeedListProps) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <NewsFeedItem 
          key={item.id} 
          item={item}
          onRun={onRunItem ? () => onRunItem(item.id) : undefined}
        />
      ))}
    </div>
  );
}