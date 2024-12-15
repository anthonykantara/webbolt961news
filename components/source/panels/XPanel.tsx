"use client";

import { useState } from "react";
import { XFeedGrid } from "../x/feed/XFeedGrid";
import { XSourcesDialog } from "../x/sources/XSourcesDialog";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import { useXSources } from "@/lib/hooks/useXSources";

export function XPanel() {
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const { sources, toggleSource, addSource, removeSource } = useXSources();

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

      <XFeedGrid sources={sources} />

      <XSourcesDialog
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