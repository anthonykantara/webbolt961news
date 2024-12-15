"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils/styles";

interface LinkInputProps {
  onSubmit: (url: string) => void;
  onClose: () => void;
}

export function LinkInput({ onSubmit, onClose }: LinkInputProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
      setUrl("");
    }
  };

  return (
    <div className={cn(
      "absolute left-full top-0 ml-2",
      "bg-white rounded-lg shadow-lg border border-gray-200",
      "p-2 w-[300px]"
    )}>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL..."
          className="h-8 text-sm"
          autoFocus
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className="h-8 w-8 hover:bg-green-50 hover:text-green-600"
        >
          <Check className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={onClose}
          className="h-8 w-8 hover:bg-red-50 hover:text-red-600"
        >
          <X className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}