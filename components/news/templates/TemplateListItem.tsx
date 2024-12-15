"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { Template } from "@/lib/types/templates";

interface TemplateListItemProps {
  template: Template;
  onToggleVisibility: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TemplateListItem({ 
  template,
  onToggleVisibility,
  onDelete
}: TemplateListItemProps) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg flex items-start gap-4">
      <Checkbox
        checked={template.isVisible}
        onCheckedChange={() => onToggleVisibility(template.id)}
        className="mt-1"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 mb-1">{template.text}</h3>
        <p className="text-sm text-gray-500">No preview available</p>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
          <span>Created {formatDistanceToNow(template.createdAt)} ago</span>
          <span>Used {template.usageCount} times</span>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(template.id)}
        className="text-gray-400 hover:text-red-600"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}