"use client";

import { Button } from "@/components/ui/button";
import { Eye, Share2, MessageSquare, Heart, ArrowUpDown } from "lucide-react";
import type { SortField } from "@/lib/types/dashboard";

interface SortControlsProps {
  sortField: SortField;
  onSortChange: (field: SortField) => void;
}

export function SortControls({ sortField, onSortChange }: SortControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Sort by:</span>
      <Button
        variant="ghost"
        size="sm"
        className="text-sm"
        onClick={() => onSortChange("views")}
      >
        <Eye className={`h-4 w-4 mr-1 ${sortField === "views" ? "text-primary" : ""}`} />
        Views
        {sortField === "views" && <ArrowUpDown className="h-3 w-3 ml-1" />}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="text-sm"
        onClick={() => onSortChange("shares")}
      >
        <Share2 className={`h-4 w-4 mr-1 ${sortField === "shares" ? "text-primary" : ""}`} />
        Shares
        {sortField === "shares" && <ArrowUpDown className="h-3 w-3 ml-1" />}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="text-sm"
        onClick={() => onSortChange("comments")}
      >
        <MessageSquare className={`h-4 w-4 mr-1 ${sortField === "comments" ? "text-primary" : ""}`} />
        Comments
        {sortField === "comments" && <ArrowUpDown className="h-3 w-3 ml-1" />}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="text-sm"
        onClick={() => onSortChange("reactions")}
      >
        <Heart className={`h-4 w-4 mr-1 ${sortField === "reactions" ? "text-primary" : ""}`} />
        Reactions
        {sortField === "reactions" && <ArrowUpDown className="h-3 w-3 ml-1" />}
      </Button>
    </div>
  );
}