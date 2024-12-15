"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ImageUploadSection } from "./sections/ImageUploadSection";
import { PreviewSection } from "./sections/PreviewSection";
import { EnhanceSection } from "./sections/EnhanceSection";
import { OutputSection } from "./sections/OutputSection";
import { ModeToggle } from "./mode/ModeToggle";
import type { ImageConfig } from "@/lib/types/featured";

export function FeaturedImageGenerator() {
  const [horizontalConfig, setHorizontalConfig] = useState<ImageConfig>({
    mode: "single",
    images: [],
    alignment: "center"
  });

  const [verticalConfig, setVerticalConfig] = useState<ImageConfig>({
    mode: "single",
    images: [],
    alignment: "center"
  });

  const [isEnhancing, setIsEnhancing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [verticalMode, setVerticalMode] = useState<"first" | "second" | "stacked">("stacked");

  const handleModeToggle = (isDual: boolean) => {
    const mode = isDual ? "dual" : "single";
    setHorizontalConfig(prev => ({ ...prev, mode }));
    setVerticalConfig(prev => ({ ...prev, mode: "single" }));
    
    // Clear images when switching modes to prevent invalid states
    if (mode === "single" && horizontalConfig.images.length > 1) {
      setHorizontalConfig(prev => ({ ...prev, mode, images: [prev.images[0]] }));
      setVerticalConfig(prev => ({ ...prev, images: [prev.images[0]] }));
    } else if (mode === "dual" && horizontalConfig.images.length === 1) {
      setHorizontalConfig(prev => ({ ...prev, mode, images: [] }));
      setVerticalConfig(prev => ({ ...prev, images: [] }));
    }
  };

  const handleHorizontalConfigChange = (newConfig: ImageConfig) => {
    setHorizontalConfig(newConfig);
    // Update vertical config with the same images
    setVerticalConfig(prev => ({
      ...prev,
      images: newConfig.mode === "single" 
        ? [newConfig.images[0]]
        : newConfig.images
    }));
  };

  const handleSwap = () => {
    if (horizontalConfig.mode === "dual" && horizontalConfig.images.length === 2) {
      setHorizontalConfig(prev => ({
        ...prev,
        images: [prev.images[1], prev.images[0]]
      }));
    }
  };

  const handleVerticalSwap = () => {
    if (verticalConfig.mode === "dual" && verticalConfig.images.length === 2) {
      setVerticalConfig(prev => ({
        ...prev,
        images: [prev.images[1], prev.images[0]]
      }));
    }
  };

  const handleEnhance = async () => {
    setIsEnhancing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsEnhancing(false);
    setIsComplete(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="space-y-8">
        <div className="flex justify-center">
          <ModeToggle
            isDual={horizontalConfig.mode === "dual"}
            onToggle={handleModeToggle}
          />
        </div>

        <Card className="p-6">
          <ImageUploadSection
            config={horizontalConfig}
            onChange={handleHorizontalConfigChange}
          />
        </Card>

        <PreviewSection
          horizontalConfig={horizontalConfig}
          verticalConfig={verticalConfig}
          onSwap={handleSwap}
          verticalMode={verticalMode}
          onVerticalModeChange={setVerticalMode}
          onVerticalSwap={handleVerticalSwap}
        />

        <EnhanceSection
          onEnhance={handleEnhance}
          isEnhancing={isEnhancing}
          disabled={horizontalConfig.images.length === 0 || isComplete}
        />

        {isComplete && (
          <OutputSection
            horizontalConfig={horizontalConfig}
            verticalConfig={verticalConfig}
          />
        )}
      </div>
    </div>
  );
}