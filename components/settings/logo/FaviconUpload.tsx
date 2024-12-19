"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import Image from "next/image";

interface FaviconUploadProps {
  favicon: string | null;
  onFaviconChange: (favicon: string | null) => void;
}

export function FaviconUpload({ favicon, onFaviconChange }: FaviconUploadProps) {
  const handleFaviconUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    onFaviconChange(url);
  };

  return (
    <div className="space-y-4">
      <Label>Favicon</Label>
      {favicon ? (
        <div className="relative w-8 h-8">
          <Image
            src={favicon}
            alt="Favicon"
            width={32}
            height={32}
            className="rounded border"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white shadow-md hover:bg-gray-100"
            onClick={() => onFaviconChange(null)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className={cn(
            "w-8 h-8 rounded border-2 border-dashed",
            "flex items-center justify-center",
            "cursor-pointer hover:bg-gray-50 transition-colors"
          )}
          onClick={() => document.getElementById("favicon-upload")?.click()}
        >
          <Upload className="h-4 w-4 text-gray-400" />
        </div>
      )}
      <input
        id="favicon-upload"
        type="file"
        accept=".ico,.png"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFaviconUpload(file);
        }}
      />
      <p className="text-sm text-gray-500">
        Recommended format: 32x32px (ICO or PNG)
      </p>
    </div>
  );
}