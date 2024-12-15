"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageConfig } from "@/lib/types/featured";

interface ImageUploadSectionProps {
  config: ImageConfig;
  onChange: (config: ImageConfig) => void;
}

export function ImageUploadSection({ config, onChange }: ImageUploadSectionProps) {
  const handleImageUpload = (files: FileList | null, index?: number) => {
    if (!files?.length) return;
    
    const urls = Array.from(files).map(file => URL.createObjectURL(file));
    
    if (config.mode === "single") {
      onChange({ ...config, images: [urls[0]] });
    } else if (typeof index === 'number') {
      const newImages = [...config.images];
      newImages[index] = urls[0];
      onChange({ ...config, images: newImages });
    }
  };

  const handleUrlSubmit = (url: string, index?: number) => {
    if (!url) return;
    
    if (config.mode === "single") {
      onChange({ ...config, images: [url] });
    } else if (typeof index === 'number') {
      const newImages = [...config.images];
      newImages[index] = url;
      onChange({ ...config, images: newImages });
    }
  };

  const renderUploadSection = (index?: number) => (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input
          placeholder="Paste image URL"
          onChange={(e) => handleUrlSubmit(e.target.value, index)}
        />
        <Button variant="outline">
          <Link className="h-4 w-4 mr-2" />
          Fetch
        </Button>
      </div>

      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors",
          "flex flex-col items-center justify-center gap-2 min-h-[180px]"
        )}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleImageUpload(e.dataTransfer.files, index);
        }}
        onClick={() => document.getElementById(`image-upload-${index}`)?.click()}
      >
        <Upload className="h-8 w-8 text-gray-400" />
        <p className="text-sm text-gray-500">
          Drag and drop image here or click to browse
        </p>
        <input
          id={`image-upload-${index}`}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleImageUpload(e.target.files, index)}
        />
      </div>
    </div>
  );
  
  return (
    <div>
      {config.mode === "single" ? (
        renderUploadSection()
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {renderUploadSection(0)}
          {renderUploadSection(1)}
        </div>
      )}
    </div>
  );
}