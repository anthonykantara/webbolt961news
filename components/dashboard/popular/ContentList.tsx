"use client";

import { ContentRow } from "./ContentRow";
import type { ContentItem } from "@/lib/types/dashboard";

interface ContentListProps {
  items: ContentItem[];
}

export function ContentList({ items }: ContentListProps) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <ContentRow key={item.id} item={item} />
      ))}
    </div>
  );
}