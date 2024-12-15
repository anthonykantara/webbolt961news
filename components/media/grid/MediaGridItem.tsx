"use client";

import { Card } from "@/components/ui/card";
import { Image, FileText, Video } from "lucide-react";
import { formatFileSize } from "../utils/formatting";
import type { MediaItem } from "../types";

interface MediaGridItemProps {
  item: MediaItem;
  onClick: () => void;
}

export function MediaGridItem({ item, onClick }: MediaGridItemProps) {
  const icon = {
    image: Image,
    video: Video,
    document: FileText
  }[item.type];

  const Icon = icon || FileText;

  return (
    <Card
      className="p-2 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center mb-2">
        {item.type === "image" ? (
          <img
            src={item.url}
            alt={item.altText}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <Icon className="h-8 w-8 text-gray-400" />
        )}
      </div>
      <div className="px-2">
        <p className="text-sm font-medium truncate">{item.filename}</p>
        <p className="text-xs text-gray-500">{formatFileSize(item.size)}</p>
      </div>
    </Card>
  );
}