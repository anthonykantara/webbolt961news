"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";

interface SwapButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function SwapButton({ onClick, disabled }: SwapButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onClick}
      disabled={disabled}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white h-8 w-8 rounded-full shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <ArrowLeftRight className="h-4 w-4" />
    </Button>
  );
}