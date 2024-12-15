"use client";

import { Button } from "@/components/ui/button";

interface ModeToggleProps {
  isDual: boolean;
  onToggle: (isDual: boolean) => void;
}

export function ModeToggle({ isDual, onToggle }: ModeToggleProps) {
  return (
    <Button
      variant="outline"
      onClick={() => onToggle(!isDual)}
      className="h-10 px-6"
    >
      {isDual ? "Dual Mode" : "Single Mode"}
    </Button>
  );
}