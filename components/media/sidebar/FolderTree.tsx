"use client";

import { FolderTreeItem } from "./FolderTreeItem";
import type { MediaFolder } from "../types";

interface FolderTreeProps {
  folders: MediaFolder[];
  selectedFolder: string | null;
  onFolderSelect: (folderId: string) => void;
}

export function FolderTree({ folders, selectedFolder, onFolderSelect }: FolderTreeProps) {
  return (
    <div className="space-y-1">
      {folders.map((folder) => (
        <FolderTreeItem
          key={folder.id}
          folder={folder}
          selectedFolder={selectedFolder}
          onFolderSelect={onFolderSelect}
          level={0}
        />
      ))}
    </div>
  );
}