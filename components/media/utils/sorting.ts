"use client";

import type { MediaItem } from "../types";

type SortField = "name" | "size" | "date" | "type";
type SortDirection = "asc" | "desc";

export function sortMediaItems(
  items: MediaItem[],
  field: SortField,
  direction: SortDirection
): MediaItem[] {
  return [...items].sort((a, b) => {
    let comparison = 0;

    switch (field) {
      case "name":
        comparison = a.filename.localeCompare(b.filename);
        break;
      case "size":
        comparison = a.size - b.size;
        break;
      case "date":
        comparison = a.uploadedAt.getTime() - b.uploadedAt.getTime();
        break;
      case "type":
        comparison = a.type.localeCompare(b.type);
        break;
    }

    return direction === "asc" ? comparison : -comparison;
  });
}