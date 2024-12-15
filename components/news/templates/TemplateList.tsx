"use client";

import { TemplateListItem } from "./TemplateListItem";
import type { TemplateListProps } from "@/lib/types/templates";

export function TemplateList({ 
  templates,
  onToggleVisibility,
  onDelete
}: TemplateListProps) {
  return (
    <div className="space-y-4">
      {templates.map((template) => (
        <TemplateListItem
          key={template.id}
          template={template}
          onToggleVisibility={onToggleVisibility}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}