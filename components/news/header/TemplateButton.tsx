"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TemplateButtonProps {
  text: string;
  onClick: () => void;
}

export function TemplateButton({ text, onClick }: TemplateButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "h-10 w-full bg-gray-50 hover:bg-gray-100 transition-colors",
        "text-sm text-[#3C3C43] text-opacity-60 font-medium truncate px-4"
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}