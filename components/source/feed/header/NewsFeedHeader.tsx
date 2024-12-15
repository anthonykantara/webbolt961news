"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings2, Search } from "lucide-react";

interface NewsFeedHeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  onManageSources: () => void;
}

export function NewsFeedHeader({ 
  searchQuery = "", 
  onSearchChange,
  onManageSources 
}: NewsFeedHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <h2 className="text-xl font-semibold">News Feed</h2>
      <div className="flex items-center gap-4">
        {onSearchChange && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search news..."
              className="pl-9 w-[300px]"
            />
          </div>
        )}
        <Button
          variant="outline"
          onClick={onManageSources}
          className="flex items-center gap-2"
        >
          <Settings2 className="h-4 w-4" />
          Sources
        </Button>
      </div>
    </div>
  );
}