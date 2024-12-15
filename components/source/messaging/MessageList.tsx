"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageItem } from "./MessageItem";
import type { Post } from "@/lib/types/source";

interface MessageListProps {
  posts: Post[];
}

export function MessageList({ posts }: MessageListProps) {
  return (
    <ScrollArea className="h-[calc(100vh-14rem)]">
      <div className="space-y-4 p-4">
        {posts.map((post) => (
          <MessageItem key={post.id} post={post} />
        ))}
      </div>
    </ScrollArea>
  );
}