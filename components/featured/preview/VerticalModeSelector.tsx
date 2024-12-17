import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/styles";
import type { VerticalMode } from "./ImagePreview";

interface VerticalModeSelectorProps {
  mode: VerticalMode;
  onModeChange: (mode: VerticalMode) => void;
}

export function VerticalModeSelector({ mode, onModeChange }: VerticalModeSelectorProps) {
  return (
    <div className="flex items-center gap-1 bg-white rounded-lg shadow-sm border p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onModeChange("stacked")}
        className={cn(
          "h-8 px-3",
          mode === "stacked" && "bg-gray-100"
        )}
      >
        Dual
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onModeChange("first")}
        className={cn(
          "h-8 px-3",
          mode === "first" && "bg-gray-100"
        )}
      >
        Single
      </Button>
    </div>
  );
}