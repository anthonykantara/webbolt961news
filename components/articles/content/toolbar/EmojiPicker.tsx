"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smile } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import dynamic from "next/dynamic";

const Picker = dynamic(
  () => import("@emoji-mart/react").then((mod) => mod.default),
  { ssr: false }
);

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
}

export function EmojiPicker({ onSelect }: EmojiPickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-8 w-8 hover:bg-gray-100",
            "transition-colors duration-200"
          )}
        >
          <Smile className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0" 
        align="start"
        sideOffset={5}
      >
        <Picker
          data={async () => {
            const response = await fetch(
              'https://cdn.jsdelivr.net/npm/@emoji-mart/data'
            );
            return response.json();
          }}
          onEmojiSelect={(emoji: any) => onSelect(emoji.native)}
          theme="light"
          previewPosition="none"
          skinTonePosition="none"
        />
      </PopoverContent>
    </Popover>
  );
}