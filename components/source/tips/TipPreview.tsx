"use client";

import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Tip } from "@/lib/types/source";

interface TipPreviewProps {
  tip: Tip;
  isSelected: boolean;
  onClick: () => void;
  onDelete: () => void;
}

export function TipPreview({ tip, isSelected, onClick, onDelete }: TipPreviewProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border transition-colors",
        "hover:bg-gray-50",
        isSelected && "border-[#FF0000] bg-red-50/50"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 cursor-pointer" onClick={onClick}>
          <p className="text-sm text-gray-900 line-clamp-2 mb-2">{tip.content}</p>
          <div className="text-xs text-gray-500">
            {formatDistanceToNow(tip.timestamp)} ago
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="h-8 w-8 text-gray-400 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}