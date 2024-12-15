"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { getTimeAgo } from "@/lib/utils/date";
import type { FeedItem as FeedItemType } from "@/lib/types/website-feed";

interface FeedItemProps {
  item: FeedItemType;
  onRun: () => void;
}

export function FeedItem({ item, onRun }: FeedItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-2 px-1">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <span className="text-sm text-gray-500 whitespace-nowrap">
          {getTimeAgo(item.publishedAt)}
        </span>
        <span className="text-gray-300">•</span>
        <span className="text-sm text-gray-400 whitespace-nowrap">
          {item.source.name}
        </span>
        <span className="text-gray-300">•</span>
        <a 
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-blue-600 transition-colors duration-200 truncate"
        >
          {item.headline}
        </a>
      </div>
      <Button
        size="sm"
        onClick={onRun}
        className="flex-shrink-0 bg-[#FF0000] hover:bg-[#E60000] h-7 px-2"
      >
        <Play className="h-3 w-3" />
      </Button>
    </div>
  );
}