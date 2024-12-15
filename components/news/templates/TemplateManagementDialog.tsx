"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { TemplateHeader } from "./TemplateHeader";
import { TemplateList } from "./TemplateList";
import type { Template, TemplateDialogProps } from "@/lib/types/templates";

const MOCK_TEMPLATES: Template[] = [
  {
    id: "1",
    text: "Airstrike in Dahye",
    isVisible: true,
    createdAt: new Date(),
    usageCount: 15
  },
  {
    id: "2",
    text: "Fire at National Museum",
    isVisible: true,
    createdAt: new Date(),
    usageCount: 8
  }
];

export function TemplateManagementDialog({ open, onOpenChange }: TemplateDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [templates, setTemplates] = useState(MOCK_TEMPLATES);

  const handleToggleVisibility = (id: string) => {
    setTemplates(prev => prev.map(template => 
      template.id === id 
        ? { ...template, isVisible: !template.isVisible }
        : template
    ));
  };

  const handleDelete = (id: string) => {
    setTemplates(prev => prev.filter(template => template.id !== id));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[800px] max-h-[80vh] flex flex-col">
        <DialogTitle className="sr-only">Template Management</DialogTitle>
        
        <div className="mb-4">
          <TemplateHeader 
            searchValue={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          <TemplateList
            templates={templates}
            onToggleVisibility={handleToggleVisibility}
            onDelete={handleDelete}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}