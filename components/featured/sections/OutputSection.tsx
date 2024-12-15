"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import type { ImageConfig } from "@/lib/types/featured";

interface OutputSectionProps {
  horizontalConfig: ImageConfig;
  verticalConfig: ImageConfig;
}

export function OutputSection({
  horizontalConfig,
  verticalConfig
}: OutputSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-green-600">
        <Check className="h-5 w-5" />
        <span className="font-medium">Images enhanced!</span>
      </div>

      <div className="flex items-start gap-6">
        <div className={cn(
          "overflow-hidden rounded-lg",
          "w-[700px] aspect-video relative"
        )}>
          {horizontalConfig.mode === "single" ? (
            <img
              src={horizontalConfig.images[0]}
              alt="Horizontal"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="relative flex h-full">
              <div className="w-1/2">
                {horizontalConfig.images[0] && (
                  <img
                    src={horizontalConfig.images[0]}
                    alt="Horizontal 1"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="w-1/2">
                {horizontalConfig.images[1] && (
                  <img
                    src={horizontalConfig.images[1]}
                    alt="Horizontal 2"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -ml-[2px] bg-white" />
            </div>
          )}
        </div>

        <div className={cn(
          "overflow-hidden rounded-lg",
          "w-[300px] aspect-[9/16]"
        )}>
          {verticalConfig.mode === "single" ? (
            <img
              src={verticalConfig.images[0]}
              alt="Vertical"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="relative flex flex-col h-full">
              <div className="h-1/2">
                {verticalConfig.images[0] && (
                  <img
                    src={verticalConfig.images[0]}
                    alt="Vertical 1"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="h-1/2">
                {verticalConfig.images[1] && (
                  <img
                    src={verticalConfig.images[1]}
                    alt="Vertical 2"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="absolute top-1/2 left-0 right-0 h-[4px] -mt-[2px] bg-white" />
            </div>
          )}
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label>Image Credit</Label>
          <Input
            placeholder="@username | @username2"
            className="mt-2"
          />
        </div>
      </div>
      
      <div>
        <Button 
          className="w-full bg-[#FF0000] hover:bg-[#E60000]"
          onClick={() => console.log("Setting featured images")}
        >
          Set Featured Images
        </Button>
      </div>
    </div>
  );
}