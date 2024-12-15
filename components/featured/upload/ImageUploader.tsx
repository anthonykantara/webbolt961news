"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight, Upload, Link } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageConfig } from "@/lib/types/featured";

interface ImageUploaderProps {
  config: ImageConfig;
  onChange: (config: ImageConfig) => void;
}

export function ImageUploader({ config, onChange }: ImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (files: FileList | null) => {
    if (!files?.length) return;
    
    const urls = Array.from(files).map(file => URL.createObjectURL(file));
    onChange({
      ...config,
      images: config.mode === "single" ? [urls[0]] : [...urls]
    });
  };

  const handleUrlSubmit = () => {
    if (!imageUrl) return;
    onChange({
      ...config,
      images: config.mode === "single" ? [imageUrl] : [...config.images, imageUrl]
    });
    setImageUrl("");
  };

  const handleSwapPositions = () => {
    if (config.images.length !== 2) return;
    onChange({
      ...config,
      images: [config.images[1], config.images[0]]
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Paste image URL"
        />
        <Button
          variant="outline"
          onClick={handleUrlSubmit}
          disabled={!imageUrl}
        >
          <Link className="h-4 w-4 mr-2" />
          Fetch
        </Button>
      </div>

      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors",
          "flex flex-col items-center justify-center gap-2 min-h-[200px]"
        )}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleImageUpload(e.dataTransfer.files);
        }}
        onClick={() => document.getElementById("image-upload")?.click()}
      >
        <Upload className="h-8 w-8 text-gray-400" />
        <p className="text-sm text-gray-500">
          Drag and drop or click to upload
        </p>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          multiple={config.mode === "dual"}
          className="hidden"
          onChange={(e) => handleImageUpload(e.target.files)}
        />
      </div>
      
      {config.mode === "dual" && config.images.length === 2 && (
        <Button
          variant="outline"
          onClick={handleSwapPositions}
          className="w-full"
        >
          <ArrowLeftRight className="h-4 w-4 mr-2" />
          Swap Positions
        </Button>
      )}
    </div>
  );
}