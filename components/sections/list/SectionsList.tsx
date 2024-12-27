"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Globe, Languages, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Section } from "@/lib/types/sections";

interface SectionsListProps {
  sections: Section[];
  onEdit: (section: Section) => void;
  onDelete: (id: string) => void;
}

export function SectionsList({ sections, onEdit, onDelete }: SectionsListProps) {
  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <Card key={section.id} className="p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="font-medium">{section.name}</h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Languages className="h-4 w-4" />
                  <span>{Object.keys(section.translations).length} translations</span>
                </div>
                <div className="flex items-center gap-1">
                  <Search className="h-4 w-4" />
                  <span>{section.seo.keywords.length} keywords</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {Object.entries(section.translations).map(([lang, translation]) => (
                  <Badge key={lang} variant="secondary">
                    {lang}: {translation}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(section)}
                className="h-8 w-8 text-gray-400 hover:text-blue-600"
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(section.id)}
                className="h-8 w-8 text-gray-400 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}