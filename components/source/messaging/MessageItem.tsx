"use client";

import { formatDistanceToNow } from "date-fns";
import type { Post } from "@/lib/types/source";

interface MessageItemProps {
  post: Post;
}

export function MessageItem({ post }: MessageItemProps) {
  return (
    <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <p className="text-sm mb-1">{post.content}</p>
      <span className="text-xs text-gray-500">
        {formatDistanceToNow(post.timestamp)} ago
      </span>
    </div>
  );
}