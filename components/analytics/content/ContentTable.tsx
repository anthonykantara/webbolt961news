```typescript
"use client";

import { ContentTypeIcon } from "./ContentTypeIcon";
import { ContentStats } from "./ContentStats";
import { ReferralStats } from "./ReferralStats";
import { TopicTags } from "./TopicTags";
import { formatDistanceToNow } from "date-fns";
import type { ContentItem } from "../types";

interface ContentTableProps {
  items: ContentItem[];
}

export function ContentTable({ items }: ContentTableProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg border p-4 space-y-4">
          <div className="flex items-center gap-2">
            <ContentTypeIcon type={item.type} />
            <h3 className="font-medium">{item.title}</h3>
          </div>

          <ContentStats
            views={item.stats.distribution}
            users={item.stats.users}
            engagement={{
              reactions: item.stats.reactions,
              comments: item.stats.comments,
              shares: item.stats.shares
            }}
          />

          <div className="grid grid-cols-2 gap-4">
            <ReferralStats referrers={item.referrers} />
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Topics</h4>
              <TopicTags section={item.section} topics={item.topics} />
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Published {formatDistanceToNow(item.publishedAt)} ago by {item.author}
          </div>
        </div>
      ))}
    </div>
  );
}
```