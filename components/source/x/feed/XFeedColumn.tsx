"use client";

import { Tweet } from "../tweet/Tweet";
import { Card } from "@/components/ui/card";
import type { XPost } from "@/lib/types/x-feed";

interface XFeedColumnProps {
  title: string;
  posts: XPost[];
}

export function XFeedColumn({ title, posts }: XFeedColumnProps) {
  if (posts.length === 0) {
    return (
      <Card className="p-4">
        <h2 className="text-sm font-medium text-gray-500 mb-4">{title}</h2>
        <div className="text-center text-gray-500 py-4">
          No tweets available
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <h2 className="text-sm font-medium text-gray-500 mb-4">{title}</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <Tweet key={post.id} tweet={post} />
        ))}
      </div>
    </Card>
  );
}