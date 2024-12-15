"use client";

import { useEffect, useRef } from "react";
import { Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Picker = dynamic(
  () => import("@emoji-mart/react").then((mod) => mod.Picker),
  { ssr: false }
);

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

export function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-8 w-8 text-[#8A8A8E] hover:text-[#0E121B]",
            "transition-colors duration-200"
          )}
        >
          <Smile className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0" 
        align="end"
        sideOffset={5}
      >
        <Picker
          data={async () => {
            const response = await fetch(
              'https://cdn.jsdelivr.net/npm/@emoji-mart/data'
            );
            return response.json();
          }}
          onEmojiSelect={(emoji: any) => onEmojiSelect(emoji.native)}
          theme="light"
          previewPosition="none"
          skinTonePosition="none"
        />
      </PopoverContent>
    </Popover>
  );
}