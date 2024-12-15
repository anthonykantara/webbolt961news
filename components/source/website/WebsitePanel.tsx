"use client";

import { useState } from "react";
import { WebsiteFeed } from "./feed/WebsiteFeed";
import { SourcesDialog } from "./sources/SourcesDialog";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import { useWebsiteSources } from "@/lib/hooks/useWebsiteSources";

export function WebsitePanel() {
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const { sources, toggleSource, addSource, removeSource } = useWebsiteSources();

  return (
    <div className="px-6">
      <div className="flex items-center justify-end mb-4">
        <Button
          variant="outline"
          onClick={() => setIsSourcesOpen(true)}
          className="flex items-center gap-2"
        >
          <Settings2 className="h-4 w-4" />
          Sources
        </Button>
      </div>

      <WebsiteFeed sources={sources} />

      <SourcesDialog
        open={isSourcesOpen}
        onOpenChange={setIsSourcesOpen}
        sources={sources}
        onToggle={toggleSource}
        onAdd={addSource}
        onRemove={removeSource}
      />
    </div>
  );
}