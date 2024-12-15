"use client";

import { useState, useMemo } from "react";
import type { MediaType, MediaItem, MediaFolder } from "../types";

// Mock data - in a real app, this would come from an API
const MOCK_MEDIA_ITEMS: MediaItem[] = [
  {
    id: "1",
    filename: "beirut-explosion.jpg",
    altText: "Aftermath of explosion in Beirut port",
    type: "image",
    size: 2500000, // 2.5MB
    dimensions: { width: 1920, height: 1080 },
    url: "/media/2024/03/beirut-explosion.jpg",
    uploadedAt: new Date("2024-03-15"),
    folder: "2024/03",
    usedIn: [
      {
        id: "article-1",
        title: "Breaking: Explosion rocks Beirut port",
        type: "article",
        url: "/news/explosion-rocks-beirut-port"
      }
    ]
  }
  // Add more mock items as needed
];

const MOCK_FOLDERS: MediaFolder[] = [
  {
    id: "2024",
    name: "2024",
    path: "2024",
    size: 15000000,
    itemCount: 150,
    subfolders: [
      {
        id: "2024-03",
        name: "March",
        path: "2024/03",
        size: 5000000,
        itemCount: 50
      }
    ]
  }
];

export function useMediaLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedMediaType, setSelectedMediaType] = useState<MediaType>("all");
  const [showUnassociated, setShowUnassociated] = useState(false);

  const filteredItems = useMemo(() => {
    return MOCK_MEDIA_ITEMS.filter(item => {
      // Filter by search query
      if (searchQuery && !item.filename.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Filter by folder
      if (selectedFolder && !item.folder.startsWith(selectedFolder)) {
        return false;
      }

      // Filter by media type
      if (selectedMediaType !== "all" && item.type !== selectedMediaType) {
        return false;
      }

      // Filter unassociated items
      if (showUnassociated && item.usedIn.length > 0) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedFolder, selectedMediaType, showUnassociated]);

  const totalSize = useMemo(() => {
    return MOCK_MEDIA_ITEMS.reduce((acc, item) => acc + item.size, 0);
  }, []);

  return {
    mediaItems: filteredItems,
    folders: MOCK_FOLDERS,
    totalSize,
    searchQuery,
    selectedFolder,
    selectedMediaType,
    showUnassociated,
    setSearchQuery,
    setSelectedFolder,
    setSelectedMediaType,
    setShowUnassociated
  };
}