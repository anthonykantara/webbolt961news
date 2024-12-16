"use client";

import { useState } from "react";
import { ContentListItem } from "./ContentListItem";
import { ContentSearch } from "./ContentSearch";
import { ContentFilters } from "./ContentFilters";
import { useContentData } from "../hooks/useContentData";
import type { DateRange } from "../utils/types";

interface ContentListProps {
  dateRange: DateRange;
}

export function ContentList({ dateRange }: ContentListProps) {
  const { items } = useContentData(dateRange);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <ContentSearch value={searchQuery} onChange={setSearchQuery} />
        <ContentFilters />
      </div>

      <div className="space-y-4">
        {filteredItems.map((item) => (
          <ContentListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}