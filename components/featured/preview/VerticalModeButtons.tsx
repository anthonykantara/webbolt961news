"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/styles";

interface VerticalModeButtonsProps {
  mode: "first" | "second" | "stacked";
  onModeChange: (mode: "first" | "second" | "stacked") => void;
  disabled?: boolean;
}

export function VerticalModeButtons({ mode, onModeChange, disabled }: VerticalModeButtonsProps) {
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onModeChange("first")}
        className={cn("text-sm", mode === "first" && "bg-gray-100")}
        disabled={disabled}
      >
        First
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onModeChange("second")}
        className={cn("text-sm", mode === "second" && "bg-gray-100")}
        disabled={disabled}
      >
        Second
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onModeChange("stacked")}
        className={cn("text-sm", mode === "stacked" && "bg-gray-100")}
        disabled={disabled}
      >
        Stacked
      </Button>
    </>
  );
}