"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import { formatTimeAgo } from "@/lib/utils/date";
import type { NewsItem } from "@/lib/types/news-feed";

interface NewsFeedItemProps {
  item: NewsItem;
  onRun?: () => void;
}

export function NewsFeedItem({ item, onRun }: NewsFeedItemProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm min-w-0">
          <span className="text-gray-500 whitespace-nowrap">
            {formatTimeAgo(item.publishedAt)}
          </span>
          <span className="text-gray-400">•</span>
          <span className="font-medium text-gray-700 whitespace-nowrap">
            {item.source.name}
          </span>
          <a 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors duration-200 truncate"
          >
            <span className="truncate">{item.headline}</span>
            <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
        {onRun && (
          <Button
            size="sm"
            onClick={onRun}
            className="flex-shrink-0 bg-[#FF0000] hover:bg-[#E60000]"
          >
            <Play className="h-4 w-4 mr-2" />
            Run
          </Button>
        )}
      </div>
    </Card>
  );
}