"use client";

import { formatDistanceToNow } from "date-fns";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { NewsItem } from "@/lib/types/news-feed";

interface NewsFeedItemProps {
  item: NewsItem;
}

export function NewsFeedItem({ item }: NewsFeedItemProps) {
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
          className="flex-1 group flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors duration-200"
        >
          <span>{item.headline}</span>
          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </Card>
  );
}