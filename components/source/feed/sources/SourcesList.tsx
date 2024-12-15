"use client";

import { Checkbox } from "@/components/ui/checkbox";
import type { NewsSource } from "@/lib/types/news-feed";

interface SourcesListProps {
  sources: NewsSource[];
  onToggle: (sourceId: string) => void;
}

export function SourcesList({ sources, onToggle }: SourcesListProps) {
  return (
    <div className="space-y-4">
      {sources.map((source) => (
        <div key={source.id} className="flex items-center gap-3">
          <Checkbox
            id={source.id}
            checked={source.isActive}
            onCheckedChange={() => onToggle(source.id)}
          />
          <label
            htmlFor={source.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {source.name}
          </label>
        </div>
      ))}
    </div>
  );
}