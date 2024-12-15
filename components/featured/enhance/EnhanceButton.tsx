"use client";

import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";

interface EnhanceButtonProps {
  onEnhance: () => void;
  isEnhancing: boolean;
  disabled: boolean;
}

export function EnhanceButton({ onEnhance, isEnhancing, disabled }: EnhanceButtonProps) {
  return (
    <Button
      onClick={onEnhance}
      disabled={disabled || isEnhancing}
      className="w-full h-12 bg-[#FF0000] hover:bg-[#E60000]"
    >
      <Wand2 className="h-5 w-5 mr-2" />
      {isEnhancing ? "Enhancing..." : "Enhance with Arze Magic"}
    </Button>
  );
}