"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  label: string;
  shortcut: string;
  variant: "primary" | "danger";
  onClick: () => void;
  className?: string;
}

export function ActionButton({ 
  label, 
  shortcut, 
  variant, 
  onClick,
  className 
}: ActionButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "h-10 relative group",
        variant === "primary" && "bg-[#0084FF] hover:bg-[#0074E5]",
        variant === "danger" && "bg-[#FF0000] hover:bg-[#E60000]",
        className
      )}
    >
      <span>{label}</span>
      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[12px] text-gray-500 opacity-50 whitespace-nowrap">
        {shortcut}
      </span>
    </Button>
  );
}