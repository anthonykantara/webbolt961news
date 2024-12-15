"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { Language, Update } from "@/lib/types/updates";

interface UpdateItemProps {
  update: Update;
  language: Language;
  onEdit: () => void;
  onDelete: () => void;
}

export function UpdateItem({ update, language, onEdit, onDelete }: UpdateItemProps) {
  const content = update.content[language];
  
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 mb-1">{content.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{content.content}</p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span>Modified {formatDistanceToNow(update.lastModified)} ago</span>
            <div className="flex items-center gap-1">
              {update.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 uppercase"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onEdit}
            className="text-gray-400 hover:text-blue-600"
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-gray-400 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}