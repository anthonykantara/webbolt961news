"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Folder, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatFileSize } from "../utils/formatting";
import type { MediaFolder } from "../types";

interface FolderTreeItemProps {
  folder: MediaFolder;
  selectedFolder: string | null;
  onFolderSelect: (folderId: string) => void;
  level: number;
}

export function FolderTreeItem({
  folder,
  selectedFolder,
  onFolderSelect,
  level
}: FolderTreeItemProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasSubfolders = folder.subfolders && folder.subfolders.length > 0;
  const isSelected = selectedFolder === folder.id;

  return (
    <div>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start px-2 py-1.5 h-auto",
          isSelected && "bg-gray-100"
        )}
        onClick={() => onFolderSelect(folder.id)}
      >
        <div className="flex items-center gap-2" style={{ paddingLeft: `${level * 12}px` }}>
          {hasSubfolders && (
            <ChevronRight
              className={cn(
                "h-4 w-4 text-gray-500 transition-transform",
                isExpanded && "rotate-90"
              )}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            />
          )}
          {isSelected ? (
            <FolderOpen className="h-4 w-4 text-blue-500" />
          ) : (
            <Folder className="h-4 w-4 text-gray-400" />
          )}
          <span className="flex-1 truncate">{folder.name}</span>
          <span className="text-xs text-gray-500">
            {formatFileSize(folder.size)}
          </span>
        </div>
      </Button>

      {hasSubfolders && isExpanded && (
        <div className="mt-1">
          {folder.subfolders?.map((subfolder) => (
            <FolderTreeItem
              key={subfolder.id}
              folder={subfolder}
              selectedFolder={selectedFolder}
              onFolderSelect={onFolderSelect}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}