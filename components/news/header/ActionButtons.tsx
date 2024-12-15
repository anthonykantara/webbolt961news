"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionButtonsProps {
  onRun: () => void;
  onPublish: () => void;
}

export function ActionButtons({ onRun, onPublish }: ActionButtonsProps) {
  return (
    <div className="flex items-center gap-[35px]">
      <Button
        onClick={onRun}
        className={cn(
          "h-[84px] w-[106px] bg-[#0084FF] hover:bg-[#0074E5]",
          "flex flex-col items-center justify-center"
        )}
      >
        <span className="font-medium">Run</span>
        <span className="text-[12px] text-white/50 mt-1">
          Shift + R
        </span>
      </Button>
      <Button
        onClick={onPublish}
        className={cn(
          "h-[84px] w-[160px] bg-[#FF0000] hover:bg-[#E60000]",
          "flex flex-col items-center justify-center"
        )}
      >
        <span className="font-medium">Publish</span>
        <span className="text-[12px] text-white/50 mt-1">
          Shift + Enter
        </span>
      </Button>
    </div>
  );
}