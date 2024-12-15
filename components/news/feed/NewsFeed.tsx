"use client";

import { useState } from "react";
import { NewsItem } from "./NewsItem";
import { SourcesDialog } from "./SourcesDialog";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import { useNewsFeed } from "@/lib/hooks/useNewsFeed";
import { Skeleton } from "@/components/ui/skeleton";

export function NewsFeed() {
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const { items, sources, isLoading, toggleSource, addSource } = useNewsFeed();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-8 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">News Feed</h2>
        <Button
          variant="outline"
          onClick={() => setIsSourcesOpen(true)}
          className="flex items-center gap-2"
        >
          <Settings2 className="h-4 w-4" />
          Sources
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No news items available. Try activating more sources.
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <NewsItem key={item.id} item={item} />
          ))}
        </div>
      )}

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