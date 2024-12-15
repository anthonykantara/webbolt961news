"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/styles";
import { Wand2 } from "lucide-react";

interface EnhanceSectionProps {
  onEnhance: () => void;
  isEnhancing: boolean;
  disabled: boolean;
}

export function EnhanceSection({
  onEnhance,
  isEnhancing,
  disabled
}: EnhanceSectionProps) {
  return (
    <div className="relative">
      <Button
        onClick={onEnhance}
        disabled={disabled}
        className={cn(
          "w-full h-14 relative overflow-hidden transition-all duration-300",
          "bg-gradient-to-r from-[#FF0000] via-[#FF2B2B] to-[#FF5555]",
          "hover:from-[#E60000] hover:via-[#E62B2B] hover:to-[#E65555]",
          "shadow-[0_0_20px_rgba(255,0,0,0.15)]",
          "hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]",
          "border border-red-400/30",
          "font-medium tracking-wide",
          disabled && "opacity-50 cursor-not-allowed hover:shadow-none"
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
        <div className="relative flex items-center justify-center gap-2">
          <Wand2 className={cn(
            "h-5 w-5 transition-transform",
            isEnhancing && "animate-spin",
            disabled && "opacity-50"
          )} />
          <span className="text-white">
            {isEnhancing ? "Enhancing..." : "Enhance with Arze"}
          </span>
        </div>
      </Button>
    </div>
  );
}