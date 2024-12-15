"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import type { ImageConfig } from "@/lib/types/featured";

interface ImageOutputProps {
  horizontalConfig: ImageConfig;
  verticalConfig: ImageConfig;
}

export function ImageOutput({ horizontalConfig, verticalConfig }: ImageOutputProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-green-600">
        <Check className="h-5 w-5" />
        <span className="font-medium">Images enhanced and saved!</span>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-4 space-y-4">
          <Label>Horizontal Featured</Label>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {horizontalConfig.mode === "single" ? (
              <img
                src={horizontalConfig.images[0]}
                alt="Horizontal"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="grid grid-cols-2 h-full">
                {horizontalConfig.images.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Horizontal ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        </Card>

        <Card className="p-4 space-y-4">
          <Label>Vertical Featured</Label>
          <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={verticalConfig.images[0]}
              alt="Vertical"
              className="w-full h-full object-cover"
            />
          </div>
        </Card>
      </div>

      <Card className="p-4">
        <Label>Image Credit</Label>
        <Input
          placeholder="@username | @username2"
          className="mt-2"
        />
      </Card>
    </div>
  );
}