"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GripVertical, X } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import { BlockContent } from "./BlockContent";
import type { Block } from "@/lib/types/article";

interface EditorBlockProps {
  block: Block;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (content: string) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export function EditorBlock({
  block,
  index,
  isSelected,
  onSelect,
  onChange,
  onDelete,
  onMoveUp,
  onMoveDown
}: EditorBlockProps) {
  const [showControls, setShowControls] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div 
      className={cn(
        "group relative transition-all duration-200",
        isSelected && "z-10",
        isDragging && "opacity-50"
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={onSelect}
    >
      {/* Block controls */}
      <div className={cn(
        "absolute -left-10 top-0 bottom-0 flex items-center opacity-0 transition-opacity duration-200",
        (showControls || isSelected) && "opacity-100"
      )}>
        <button
          className={cn(
            "p-1.5 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing",
            "transition-colors duration-200"
          )}
          draggable
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          <GripVertical className="h-4 w-4" />
        </button>
      </div>

      {/* Delete button */}
      <div className={cn(
        "absolute -right-10 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200",
        (showControls || isSelected) && "opacity-100"
      )}>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Block content */}
      <div className={cn(
        "relative rounded-lg transition-all duration-200",
        (showControls || isSelected) && "ring-2 ring-red-100"
      )}>
        <BlockContent
          type={block.type}
          content={block.content}
          onChange={onChange}
        />
      </div>
    </div>
  );
}