"use client";

import { Eye, Share2, MessageSquare } from "lucide-react";
import type { ContentRowProps } from "./types";

export function ContentRow({ item }: ContentRowProps) {
  return (
    <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2">
      <p className="text-sm font-medium flex-1">{item.title}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <Eye className="h-4 w-4" />
          {item.views.toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <Share2 className="h-4 w-4" />
          {item.shares.toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <MessageSquare className="h-4 w-4" />
          {item.comments.toLocaleString()}
        </span>
      </div>
    </div>
  );
}