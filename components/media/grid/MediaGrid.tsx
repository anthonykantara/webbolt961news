"use client";

import { MediaGridItem } from "./MediaGridItem";
import type { MediaItem } from "../types";

interface MediaGridProps {
  items: MediaItem[];
  onItemSelect: (item: MediaItem) => void;
}

export function MediaGrid({ items, onItemSelect }: MediaGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No media items found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <MediaGridItem
          key={item.id}
          item={item}
          onClick={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
}