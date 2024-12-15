"use client";

import { useState } from "react";
import type { ContentItem, SortField } from "@/lib/types/dashboard";

const MOCK_UPDATES: ContentItem[] = [
  {
    id: "1",
    title: "Breaking: Major development in downtown Beirut",
    views: 12500,
    shares: 450,
    comments: 89,
    reactions: 678,
    type: "update"
  },
  {
    id: "2",
    title: "Traffic disruption on coastal highway",
    views: 8900,
    shares: 320,
    comments: 45,
    reactions: 432,
    type: "update"
  }
];

const MOCK_ARTICLES: ContentItem[] = [
  {
    id: "1",
    title: "Analysis: Economic Impact of Recent Developments",
    views: 15600,
    shares: 890,
    comments: 234,
    reactions: 1234,
    type: "article"
  },
  {
    id: "2",
    title: "Interview: Minister Discusses New Initiatives",
    views: 12300,
    shares: 567,
    comments: 123,
    reactions: 876,
    type: "article"
  }
];

export function usePopularContent() {
  const [sortField, setSortField] = useState<SortField>("views");
  const [activeTab, setActiveTab] = useState("updates");

  const sortContent = (items: ContentItem[]) => {
    return [...items].sort((a, b) => b[sortField] - a[sortField]);
  };

  const sortedUpdates = sortContent(MOCK_UPDATES);
  const sortedArticles = sortContent(MOCK_ARTICLES);

  return {
    sortField,
    setSortField,
    activeTab,
    setActiveTab,
    sortedUpdates,
    sortedArticles
  };
}