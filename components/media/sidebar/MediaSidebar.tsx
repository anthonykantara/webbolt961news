"use client";

import { Card } from "@/components/ui/card";
import { FolderTree } from "./FolderTree";
import type { MediaFolder } from "../types";

interface MediaSidebarProps {
  folders: MediaFolder[];
  selectedFolder: string | null;
  onFolderSelect: (folderId: string) => void;
}

export function MediaSidebar({
  folders,
  selectedFolder,
  onFolderSelect
}: MediaSidebarProps) {
  return (
    <Card className="p-4">
      <h2 className="text-sm font-medium mb-4">Folders</h2>
      <FolderTree
        folders={folders}
        selectedFolder={selectedFolder}
        onFolderSelect={onFolderSelect}
      />
    </Card>
  );
}