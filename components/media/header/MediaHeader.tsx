"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Search } from "lucide-react";
import { formatFileSize } from "../utils/formatting";
import type { MediaType } from "../types";

interface MediaHeaderProps {
  totalSize: number;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedMediaType: MediaType;
  onMediaTypeChange: (type: MediaType) => void;
  showUnassociated: boolean;
  onShowUnassociatedChange: (value: boolean) => void;
}

export function MediaHeader({
  totalSize,
  searchQuery,
  onSearchChange,
  selectedMediaType,
  onMediaTypeChange,
  showUnassociated,
  onShowUnassociatedChange
}: MediaHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Media Library</h1>
        <p className="text-sm text-gray-500 mt-1">
          Total size: {formatFileSize(totalSize)}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search media..."
            className="pl-9 w-[300px]"
          />
        </div>

        <Select value={selectedMediaType} onValueChange={onMediaTypeChange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Media type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Media</SelectItem>
            <SelectItem value="image">Images</SelectItem>
            <SelectItem value="video">Videos</SelectItem>
            <SelectItem value="document">Documents</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Switch
            checked={showUnassociated}
            onCheckedChange={onShowUnassociatedChange}
          />
          <span className="text-sm">Show unassociated only</span>
        </div>
      </div>
    </div>
  );
}