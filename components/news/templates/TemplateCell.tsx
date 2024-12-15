"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TemplateCellProps {
  text: string;
  onClick: () => void;
}

export function TemplateCell({ text, onClick }: TemplateCellProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "h-auto py-3 px-4 w-full justify-start",
        "bg-gray-50 hover:bg-gray-100 transition-colors",
        "text-[#3C3C43] text-opacity-60 font-medium text-sm",
        "whitespace-normal text-left"
      )}
    >
      {text}
    </Button>
  );
}