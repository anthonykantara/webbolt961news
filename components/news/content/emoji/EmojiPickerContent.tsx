"use client";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface EmojiPickerContentProps {
  onEmojiSelect: (emoji: string) => void;
}

export default function EmojiPickerContent({ onEmojiSelect }: EmojiPickerContentProps) {
  return (
    <Picker
      data={data}
      onEmojiSelect={(emoji: any) => onEmojiSelect(emoji.native)}
      theme="light"
      previewPosition="none"
      skinTonePosition="none"
    />
  );
}