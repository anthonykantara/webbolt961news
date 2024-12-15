"use client";

import { useState } from "react";
import type { MediaFolder } from "../types";

export function useFolderNavigation(initialFolders: MediaFolder[]) {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(folderId)) {
        next.delete(folderId);
      } else {
        next.add(folderId);
      }
      return next;
    });
  };

  const selectFolder = (folderId: string) => {
    setSelectedFolder(folderId);
  };

  return {
    selectedFolder,
    expandedFolders,
    toggleFolder,
    selectFolder
  };
}