"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { formatFileSize, formatDimensions } from "../utils/formatting";
import { format } from "date-fns";
import type { MediaItem } from "../types";

interface MediaDetailsProps {
  item: MediaItem;
  onClose: () => void;
}

export function MediaDetails({ item, onClose }: MediaDetailsProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium">Media Details</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-500">File Name</label>
          <Input value={item.filename} className="mt-1" />
        </div>

        <div>
          <label className="text-sm text-gray-500">Alt Text</label>
          <Input value={item.altText} className="mt-1" />
        </div>

        <div className="space-y-2">
          <p className="text-sm">
            <span className="text-gray-500">Type:</span> {item.type}
          </p>
          <p className="text-sm">
            <span className="text-gray-500">Size:</span> {formatFileSize(item.size)}
          </p>
          {item.dimensions && (
            <p className="text-sm">
              <span className="text-gray-500">Dimensions:</span> {formatDimensions(item.dimensions.width, item.dimensions.height)}
            </p>
          )}
          <p className="text-sm">
            <span className="text-gray-500">Uploaded:</span> {format(item.uploadedAt, "MMM d, yyyy")}
          </p>
        </div>

        {item.usedIn.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-2">Used In</h3>
            <div className="space-y-2">
              {item.usedIn.map((usage) => (
                <a
                  key={usage.id}
                  href={usage.url}
                  className="block text-sm text-blue-600 hover:underline"
                >
                  {usage.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}