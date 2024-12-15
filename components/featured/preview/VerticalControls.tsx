"use client";

import { VerticalModeButtons } from "./VerticalModeButtons";
import { VerticalSwapButton } from "./VerticalSwapButton";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils/styles";

interface VerticalControlsProps {
  mode: "first" | "second" | "stacked";
  onModeChange: (mode: "first" | "second" | "stacked") => void;
  onSwap: () => void;
  disabled?: boolean;
}

export function VerticalControls({ mode, onModeChange, onSwap, disabled }: VerticalControlsProps) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <VerticalModeButtons
        mode={mode}
        onModeChange={onModeChange}
        disabled={disabled}
      />
      {mode === "stacked" && (
        <VerticalSwapButton onSwap={onSwap} disabled={disabled} />
      )}
    </div>
  );
}