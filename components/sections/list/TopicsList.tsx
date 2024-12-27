"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Languages, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Topic } from "@/lib/types/sections";

interface TopicsListProps {
  topics: Topic[];
  onEdit: (topic: Topic) => void;
  onDelete: (id: string) => void;
}

export function TopicsList({ topics, onEdit, onDelete }: TopicsListProps) {
  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <Card key={topic.id} className="p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="font-medium">{topic.name}</h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Languages className="h-4 w-4" />
                  <span>{Object.keys(topic.translations).length} translations</span>
                </div>
                <div className="flex items-center gap-1">
                  <Search className="h-4 w-4" />
                  <span>{topic.seo.keywords.length} keywords</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {Object.entries(topic.translations).map(([lang, translation]) => (
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
                onClick={() => onEdit(topic)}
                className="h-8 w-8 text-gray-400 hover:text-blue-600"
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(topic.id)}
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