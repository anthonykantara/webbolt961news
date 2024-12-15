"use client";

import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import { getTimeAgo } from "@/lib/utils/date";
import type { XPost as XPostType } from "@/lib/types/x-feed";

interface XPostProps {
  post: XPostType;
  onRun: () => void;
}

export function XPost({ post, onRun }: XPostProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-2 px-1 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <span className="text-sm text-gray-500 whitespace-nowrap">
          {getTimeAgo(post.publishedAt)}
        </span>
        <span className="text-gray-300">•</span>
        <span className="text-sm text-gray-400 whitespace-nowrap">
          {post.source.name}
        </span>
        <span className="text-gray-300">•</span>
        <a 
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-blue-600 transition-colors duration-200 truncate group flex items-center gap-2"
        >
          <span className="truncate">{post.content}</span>
          <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
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