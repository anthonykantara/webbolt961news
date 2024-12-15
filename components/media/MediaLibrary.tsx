"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MediaHeader } from "./header/MediaHeader";
import { MediaGrid } from "./grid/MediaGrid";
import { MediaSidebar } from "./sidebar/MediaSidebar";
import { MediaDetails } from "./details/MediaDetails";
import { useMediaLibrary } from "./hooks/useMediaLibrary";
import type { MediaItem } from "./types";

export function MediaLibrary() {
  const { 
    mediaItems,
    folders,
    totalSize,
    searchQuery,
    selectedFolder,
    selectedMediaType,
    showUnassociated,
    setSearchQuery,
    setSelectedFolder,
    setSelectedMediaType,
    setShowUnassociated
  } = useMediaLibrary();

  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  return (
    <div className="p-6">
      <MediaHeader 
        totalSize={totalSize}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedMediaType={selectedMediaType}
        onMediaTypeChange={setSelectedMediaType}
        showUnassociated={showUnassociated}
        onShowUnassociatedChange={setShowUnassociated}
      />

      <div className="mt-6 flex gap-6">
        <div className="w-64 flex-shrink-0">
          <MediaSidebar 
            folders={folders}
            selectedFolder={selectedFolder}
            onFolderSelect={setSelectedFolder}
          />
        </div>

        <Card className="flex-1 p-6">
          <MediaGrid 
            items={mediaItems}
            onItemSelect={setSelectedItem}
          />
        </Card>

        {selectedItem && (
          <div className="w-96 flex-shrink-0">
            <MediaDetails 
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}