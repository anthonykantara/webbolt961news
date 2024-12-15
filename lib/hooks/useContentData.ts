"use client";

import { useState, useEffect } from "react";
import type { ContentItem, ContentFilters } from "@/lib/types/content";

const MOCK_DATA: ContentItem[] = [
  {
    id: "1",
    title: "Breaking: Major development in downtown",
    type: "article",
    status: "published",
    publishedAt: new Date(),
    modifiedAt: new Date(),
    metrics: {
      views: 12500,
      shares: 450,
      comments: 89,
      reactions: 678
    },
    authors: [
      { id: "1", name: "Sarah Editor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
      { id: "2", name: "Mike Writer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" }
    ],
    activeUsers: [
      { id: "3", name: "Alex Editor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", action: "Editing" },
      { id: "4", name: "Lisa Writer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa", action: "Reviewing" }
    ]
  },
  {
    id: "2",
    title: "Interview: Minister discusses new initiatives",
    type: "video",
    status: "draft",
    publishedAt: null,
    modifiedAt: new Date(),
    metrics: {
      views: 0,
      shares: 0,
      comments: 0,
      reactions: 0
    },
    authors: [
      { id: "2", name: "Mike Writer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" }
    ],
    activeUsers: [
      { id: "2", name: "Mike Writer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike", action: "Writing" }
    ]
  }
];

export function useContentData(filters: ContentFilters) {
  const [items, setItems] = useState<ContentItem[]>(MOCK_DATA);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate API call with filters
    setIsLoading(true);
    setTimeout(() => {
      setItems(MOCK_DATA);
      setIsLoading(false);
    }, 500);
  }, [filters]);

  return { items, isLoading };
}