"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ListOrdered, List } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import { useState } from "react";

interface ListBlockProps {
  content: string;
  onChange: (content: string) => void;
}

export function ListBlock({ content, onChange }: ListBlockProps) {
  const [listType, setListType] = useState<"bullet" | "number">("bullet");

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-8",
            listType === "bullet" && "bg-gray-100"
          )}
          onClick={() => setListType("bullet")}
        >
          <List className="h-4 w-4 mr-2" />
          Bullet List
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-8",
            listType === "number" && "bg-gray-100"
          )}
          onClick={() => setListType("number")}
        >
          <ListOrdered className="h-4 w-4 mr-2" />
          Numbered List
        </Button>
      </div>

      <Textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "min-h-[100px] resize-none border-none px-4 py-3",
          "focus-visible:ring-0 focus-visible:outline-none",
          "text-lg leading-relaxed",
          listType === "bullet" ? "list-disc" : "list-decimal",
          "story-input"
        )}
        placeholder={`Enter your ${listType === "bullet" ? "bullet" : "numbered"} list items...`}
      />
    </div>
  );
}