"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Eye } from "lucide-react";

interface EditorPreviewProps {
  onPreview: () => void;
}

export function EditorPreview({ onPreview }: EditorPreviewProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onPreview}
          aria-label="Preview article"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Preview article</TooltipContent>
    </Tooltip>
  );
}