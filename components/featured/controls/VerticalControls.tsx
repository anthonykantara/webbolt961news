"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils/styles";

interface VerticalControlsProps {
  mode: "first" | "second" | "stacked";
  onModeChange: (mode: "first" | "second" | "stacked") => void;
  onSwap: () => void;
  disabled?: boolean;
}

export function VerticalControls({
  mode,
  onModeChange,
  onSwap,
  disabled
}: VerticalControlsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onModeChange("first")}
        className={cn(
          "text-sm flex items-center gap-1",
          mode === "first" && "bg-gray-100"
        )}
        disabled={disabled}
      >
        <span className="text-xs text-gray-500">(1/2)</span>
        First
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onModeChange("second")}
        className={cn(
          "text-sm flex items-center gap-1",
          mode === "second" && "bg-gray-100"
        )}
        disabled={disabled}
      >
        <span className="text-xs text-gray-500">(2/2)</span>
        Second
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onModeChange("stacked")}
        className={cn(
          "text-sm flex items-center gap-1",
          mode === "stacked" && "bg-gray-100"
        )}
        disabled={disabled}
      >
        Stacked
      </Button>
      {mode === "stacked" && (
        <Button
          variant="outline"
          size="icon"
          onClick={onSwap}
          disabled={disabled}
          className="h-8 w-8 ml-2"
        >
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}