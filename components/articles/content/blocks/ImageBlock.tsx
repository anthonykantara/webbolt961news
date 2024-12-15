"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, Link } from "lucide-react";
import { cn } from "@/lib/utils/styles";

interface ImageBlockProps {
  content: string;
  onChange: (content: string) => void;
}

export function ImageBlock({ content, onChange }: ImageBlockProps) {
  const [imageUrl, setImageUrl] = useState(content);

  const handleImageUpload = (files: FileList | null) => {
    if (!files?.length) return;
    const file = files[0];
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    onChange(url);
  };

  return (
    <div className="space-y-4 p-4">
      {imageUrl ? (
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt="Uploaded content"
            className="w-full h-full object-cover"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 bg-white/90 hover:bg-white"
            onClick={() => {
              setImageUrl("");
              onChange("");
            }}
          >
            <Upload className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <>
          <div className="flex gap-2">
            <Input
              placeholder="Paste image URL"
              onChange={(e) => {
                setImageUrl(e.target.value);
                onChange(e.target.value);
              }}
            />
            <Button variant="outline">
              <Link className="h-4 w-4 mr-2" />
              Fetch
            </Button>
          </div>

          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer",
              "hover:bg-gray-50 transition-colors",
              "flex flex-col items-center justify-center gap-2"
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
              Drag and drop image here or click to browse
            </p>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e.target.files)}
            />
          </div>
        </>
      )}
    </div>
  );
}