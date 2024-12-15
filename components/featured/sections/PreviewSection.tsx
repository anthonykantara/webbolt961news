"use client";

import { ImagePreview } from "../preview/ImagePreview";
import type { ImageConfig } from "@/lib/types/featured";

interface PreviewSectionProps {
  horizontalConfig: ImageConfig;
  verticalConfig: ImageConfig;
  onSwap: () => void;
  verticalMode: "first" | "second" | "stacked";
  onVerticalModeChange: (mode: "first" | "second" | "stacked") => void;
  onVerticalSwap: () => void;
}

export function PreviewSection({
  horizontalConfig,
  verticalConfig,
  onSwap,
  verticalMode,
  onVerticalModeChange,
  onVerticalSwap
}: PreviewSectionProps) {
  return (
    <div className="flex items-start gap-6">
      <ImagePreview 
        config={horizontalConfig} 
        format="horizontal"
        onSwap={onSwap}
      />

      <ImagePreview 
        config={verticalConfig} 
        format="vertical"
        verticalMode={verticalMode}
        onVerticalModeChange={onVerticalModeChange}
        onVerticalSwap={onVerticalSwap}
      />
    </div>
  );
}