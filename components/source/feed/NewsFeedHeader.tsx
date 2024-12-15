"use client";

import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

interface NewsFeedHeaderProps {
  onManageSources: () => void;
}

export function NewsFeedHeader({ onManageSources }: NewsFeedHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">News Feed</h2>
      <Button
        variant="outline"
        onClick={onManageSources}
        className="flex items-center gap-2"
      >
        <Settings2 className="h-4 w-4" />
        Sources
      </Button>
    </div>
  );
}