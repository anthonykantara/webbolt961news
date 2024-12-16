"use client";

import { FileText, Zap, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentTypeIconProps {
  type: "article" | "update" | "video";
  className?: string;
}

export function ContentTypeIcon({ type, className }: ContentTypeIconProps) {
  switch (type) {
    case "article":
      return <FileText className={cn("h-4 w-4 text-blue-500", className)} />;
    case "update":
      return <Zap className={cn("h-4 w-4 text-red-500", className)} />;
    case "video":
      return <Video className={cn("h-4 w-4 text-purple-500", className)} />;
  }
}