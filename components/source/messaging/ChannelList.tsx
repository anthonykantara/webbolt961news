"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, MessageCircle } from "lucide-react";
import type { Source } from "@/lib/types/source";
import { cn } from "@/lib/utils";

interface ChannelListProps {
  sources: Source[];
  selectedSource: Source;
  onSourceSelect: (source: Source) => void;
  onAddChannel: () => void;
}

export function ChannelList({
  sources,
  selectedSource,
  onSourceSelect,
  onAddChannel
}: ChannelListProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <Button size="sm" variant="outline" className="w-full" onClick={onAddChannel}>
          <Plus className="h-4 w-4 mr-2" />
          Add Channel
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {sources.map((source) => (
            <button
              key={source.id}
              onClick={() => onSourceSelect(source)}
              className={cn(
                "w-full flex items-center gap-2 p-2 rounded-lg transition-colors",
                selectedSource.id === source.id 
                  ? "bg-gray-100" 
                  : "hover:bg-gray-50"
              )}
            >
              <MessageCircle className="h-4 w-4 text-gray-400" />
              <span className="text-sm truncate">{source.name}</span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}