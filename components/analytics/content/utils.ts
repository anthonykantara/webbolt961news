```typescript
import { FileText, Zap, Video } from "lucide-react";
import type { ContentTypeIcon } from "./types";

export function getContentTypeIcon(type: string): ContentTypeIcon {
  switch (type) {
    case "article":
      return {
        icon: <FileText className="h-4 w-4 text-blue-500" />,
        label: "Article"
      };
    case "update":
      return {
        icon: <Zap className="h-4 w-4 text-red-500" />,
        label: "Live Update"
      };
    case "video":
      return {
        icon: <Video className="h-4 w-4 text-purple-500" />,
        label: "Video"
      };
    default:
      return {
        icon: <FileText className="h-4 w-4 text-gray-500" />,
        label: "Content"
      };
  }
}

export function formatNumber(value: number): string {
  return value.toLocaleString();
}

export function formatPercentage(value: number, total: number): string {
  return `${Math.round((value / total) * 100)}%`;
}

export function formatCurrency(value: number): string {
  return `$${value.toLocaleString()}`;
}
```