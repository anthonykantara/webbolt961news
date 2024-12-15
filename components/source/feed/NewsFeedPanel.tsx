"use client";

import { useState } from "react";
import { NewsFeedList } from "./list/NewsFeedList";
import { NewsFeedHeader } from "./header/NewsFeedHeader";
import { SourcesDialog } from "./sources/SourcesDialog";
import { useNewsFeed } from "@/lib/hooks/useNewsFeed";

export function NewsFeedPanel() {
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const { 
    items, 
    sources, 
    isLoading, 
    searchQuery,
    setSearchQuery,
    toggleSource, 
    addSource,
    runItem
  } = useNewsFeed();

  return (
    <div className="max-w-4xl mx-auto">
      <NewsFeedHeader 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onManageSources={() => setIsSourcesOpen(true)} 
      />
      <NewsFeedList 
        items={items} 
        isLoading={isLoading}
        onRunItem={runItem}
      />
      <SourcesDialog
        sources={sources}
        open={isSourcesOpen}
        onOpenChange={setIsSourcesOpen}
        onToggle={toggleSource}
        onAdd={addSource}
      />
    </div>
  );
}