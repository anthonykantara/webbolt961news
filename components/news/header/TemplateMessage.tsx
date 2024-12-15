"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TemplateMessageProps {
  message: string;
  onSelect: () => void;
  isLast?: boolean;
}

export function TemplateMessage({ message, onSelect, isLast }: TemplateMessageProps) {
  return (
    <Button
      variant="ghost"
      onClick={onSelect}
      className={cn(
        "h-full bg-gray-50 hover:bg-gray-100",
        "text-sm text-[#3C3C43] text-opacity-60",
        "justify-start px-4",
        "rounded-none border-0",
        !isLast && "border-r border-[#E4E4E7]"
      )}
    >
      <span className="truncate">{message}</span>
    </Button>
  );
}