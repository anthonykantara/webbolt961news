"use client";

import { useState } from "react";
import { CloudUpload } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function FileUpload() {
  const [watermarkEnabled, setWatermarkEnabled] = useState(true);
  const [graphicContentEnabled, setGraphicContentEnabled] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
    const files = Array.from(e.dataTransfer.files);
    console.log("Dropped files:", files);
  };

  return (
    <div 
      className={cn(
        "w-[397px] h-[295px] rounded-lg",
        "border border-[#E4E4E7] bg-white overflow-hidden"
      )}
    >
      <div className="h-[40px] px-4 border-b border-[#E4E4E7] bg-white flex items-center justify-end gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#3C3C43]">Watermark</span>
          <Switch
            checked={watermarkEnabled}
            onCheckedChange={setWatermarkEnabled}
            className="scale-75"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#3C3C43]">Graphic Content</span>
          <Switch
            checked={graphicContentEnabled}
            onCheckedChange={setGraphicContentEnabled}
            className="scale-75"
          />
        </div>
      </div>

      <div
        className={cn(
          "h-[255px]",
          "border-dashed border-[#E4E4E7]",
          "flex flex-col items-center justify-center cursor-pointer relative",
          "transition-colors duration-200",
          isDragging && "border-[#0084FF] bg-blue-50/50"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <CloudUpload className="w-8 h-8 text-[#9D9D9D] mb-2" />
        <p className="text-sm font-semibold text-[#3C3C43] text-center">
          Drag and Drop here<br />or click to browse files
        </p>
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            console.log("Selected files:", files);
          }}
        />
      </div>
    </div>
  );
}