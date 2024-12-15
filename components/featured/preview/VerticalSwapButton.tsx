"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

interface VerticalSwapButtonProps {
  onSwap: () => void;
  disabled?: boolean;
}

export function VerticalSwapButton({ onSwap, disabled }: VerticalSwapButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onSwap}
      disabled={disabled}
      className="h-8 w-8 ml-2"
    >
      <ArrowUpDown className="h-4 w-4" />
    </Button>
  );
}