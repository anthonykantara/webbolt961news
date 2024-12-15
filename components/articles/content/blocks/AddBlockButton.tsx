"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Type, Image, Code, List } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import type { BlockType } from "@/lib/types/article";

interface AddBlockButtonProps {
  onAdd: (type: BlockType) => void;
  variant?: "default" | "minimal";
}

export function AddBlockButton({ onAdd, variant = "default" }: AddBlockButtonProps) {
  const [showOptions, setShowOptions] = useState(false);

  const blockTypes = [
    { type: "text" as const, icon: Type, label: "Text" },
    { type: "image" as const, icon: Image, label: "Image" },
    { type: "list" as const, icon: List, label: "List" },
    { type: "embed" as const, icon: Code, label: "Embed" }
  ];

  if (variant === "minimal") {
    return (
      <div className="relative group">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-6 w-6 rounded-full opacity-0 group-hover:opacity-100",
              "transition-all duration-200",
              "bg-white shadow-sm border hover:bg-gray-50"
            )}
            onClick={() => setShowOptions(true)}
          >
            <Plus className="h-4 w-4" />
          </Button>

          {showOptions && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-1 bg-white rounded-lg shadow-lg border flex gap-1">
              {blockTypes.map(({ type, icon: Icon, label }) => (
                <Button
                  key={type}
                  variant="ghost"
                  size="sm"
                  className="h-8 gap-2 text-sm"
                  onClick={() => {
                    onAdd(type);
                    setShowOptions(false);
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="w-full h-12 border-dashed"
        onClick={() => setShowOptions(true)}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Block
      </Button>

      {showOptions && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white rounded-lg shadow-lg border grid grid-cols-2 gap-2">
          {blockTypes.map(({ type, icon: Icon, label }) => (
            <Button
              key={type}
              variant="ghost"
              className="h-12 justify-start gap-3"
              onClick={() => {
                onAdd(type);
                setShowOptions(false);
              }}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}