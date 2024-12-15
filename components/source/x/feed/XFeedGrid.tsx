"use client";

import { Card } from "@/components/ui/card";
import { TweetContent } from "../tweet/TweetContent";
import { usePosts } from "@/lib/hooks/usePosts";
import type { XSource } from "@/lib/types/x-feed";

interface XFeedGridProps {
  sources: XSource[];
}

export function XFeedGrid({ sources }: XFeedGridProps) {
  const { posts } = usePosts(sources);

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="divide-y divide-gray-100">
        {posts.map((post) => {
          const username = post.source.name.replace("@", "");
          return (
            <div 
              key={post.id} 
              className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <TweetContent
                username={username}
                displayName={username.replace(/([A-Z])/g, ' $1').trim()}
                content={post.content}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
}