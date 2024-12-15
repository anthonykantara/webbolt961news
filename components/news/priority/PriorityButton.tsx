"use client";

import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriorityButtonProps {
  label: string;
  isSelected: boolean;
  variant?: "critical" | "high" | "normal";
  onClick: () => void;
}

export function PriorityButton({ 
  label, 
  isSelected, 
  variant = "normal",
  onClick 
}: PriorityButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 h-full rounded-lg flex flex-col items-center justify-center gap-2",
        "border-2 transition-all duration-200",
        "bg-[#F4F4F5]",
        isSelected ? [
          "border-[#DC2626]",
          "bg-[#DC2626]/5"
        ] : [
          "border-transparent",
          "hover:border-[#DC2626]/20"
        ]
      )}
    >
      <Zap 
        className={cn(
          "h-6 w-6",
          variant === "critical" && "text-[#DC2626]",
          variant === "high" && "text-black",
          variant === "normal" && "text-black"
        )}
      />
      <span className="text-sm font-medium text-[#3C3C43]">{label}</span>
    </button>
  );
}