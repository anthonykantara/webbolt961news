"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { EmojiButton } from "./EmojiButton";
import dynamic from "next/dynamic";

const EmojiPickerContent = dynamic(
  () => import("./EmojiPickerContent"),
  { 
    ssr: false,
    loading: () => <div className="p-4">Loading...</div>
  }
);

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
  className?: string;
}

export function EmojiPicker({ onEmojiSelect, className }: EmojiPickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <EmojiButton className={className} />
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0" 
        align="end"
        sideOffset={5}
      >
        <EmojiPickerContent onEmojiSelect={onEmojiSelect} />
      </PopoverContent>
    </Popover>
  );
}