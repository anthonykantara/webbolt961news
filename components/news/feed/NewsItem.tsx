"use client";

import { formatDistanceToNow } from "date-fns";
import { Card } from "@/components/ui/card";
import type { NewsItem as NewsItemType } from "@/lib/types/news-feed";

interface NewsItemProps {
  item: NewsItemType;
}

export function NewsItem({ item }: NewsItemProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-3 text-sm">
        <span className="text-gray-500">
          {formatDistanceToNow(item.publishedAt)} ago
        </span>
        <span className="text-gray-400">•</span>
        <span className="font-medium text-gray-700">{item.source.name}</span>
        <a 
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-gray-900 hover:text-blue-600 transition-colors duration-200"
        >
          {item.headline}
        </a>
      </div>
    </Card>
  );
}