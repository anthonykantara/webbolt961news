"use client";

import { cn } from "@/lib/utils/styles";
import { SwapButton } from "./SwapButton";
import { VerticalControls } from "../controls/VerticalControls";
import type { ImageConfig } from "@/lib/types/featured";

interface ImagePreviewProps {
  config: ImageConfig;
  format: "horizontal" | "vertical";
  onSwap?: () => void;
  verticalMode?: "first" | "second" | "stacked";
  onVerticalModeChange?: (mode: "first" | "second" | "stacked") => void;
  onVerticalSwap?: () => void;
}

export function ImagePreview({ 
  config, 
  format, 
  onSwap,
  verticalMode = "stacked",
  onVerticalModeChange,
  onVerticalSwap
}: ImagePreviewProps) {
  if (config.images.length === 0) {
    return (
      <div className={cn(
        format === "horizontal" ? "w-[700px] aspect-video" : "w-[300px] aspect-[9/16]",
        "flex items-center justify-center bg-gray-50 rounded-lg"
      )}>
        <p className="text-sm text-gray-500">Preview will appear here</p>
      </div>
    );
  }

  return (
    <div className={cn(
      "overflow-hidden rounded-lg",
      format === "horizontal" ? "w-[700px] aspect-video" : "w-[300px] aspect-[9/16]",
      "relative"
    )}>
      {config.mode === "single" ? (
        <img
          src={config.images[0]}
          alt="Preview"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className={cn(
          "relative h-full",
          format === "horizontal" ? "flex" : "flex flex-col"
        )}>
          {format === "horizontal" ? (
            // Horizontal preview with two side-by-side images
            <>
              <div className="w-1/2">
                {config.images[0] && (
                  <img
                    src={config.images[0]}
                    alt="Preview 1"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="w-1/2">
                {config.images[1] && (
                  <img
                    src={config.images[1]}
                    alt="Preview 2"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -ml-[2px] bg-white z-10" />
            </>
          ) : (
            // Vertical preview with stacked or single image view
            verticalMode === "stacked" ? (
              // Stacked view shows both images
              <>
                <div className="h-1/2 relative">
                  {config.images[0] && (
                    <img
                      src={config.images[0]}
                      alt="Preview 1"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="h-1/2 relative">
                  {config.images[1] && (
                    <img
                      src={config.images[1]}
                      alt="Preview 2"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute top-1/2 left-0 right-0 h-[4px] -mt-[2px] bg-white z-10" />
              </>
            ) : (
              // Single image view shows selected image
              <div className="h-full">
                <img
                  src={config.images[verticalMode === "first" ? 0 : 1]}
                  alt={`Preview ${verticalMode === "first" ? 1 : 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}

          {/* Separator lines */}
          {config.mode === "dual" && config.images.length > 0 && format === "horizontal" && (
            <SwapButton
              onClick={onSwap || (() => {})}
              disabled={config.images.length !== 2}
            />
          )}
        </div>
      )}

      {/* Vertical mode controls */}
      {format === "vertical" && config.mode === "dual" && onVerticalModeChange && (
        <VerticalControls
          mode={verticalMode}
          onModeChange={onVerticalModeChange}
          onSwap={onVerticalSwap || (() => {})}
          disabled={config.images.length !== 2}
        />
      )}
    </div>
  );
}