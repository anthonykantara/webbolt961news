"use client";

import { Textarea } from "@/components/ui/textarea";
import { EmojiPicker } from "./emoji";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsContentInputProps {
  value: string;
  onChange: (value: string) => void;
  isRunning?: boolean;
  onRun?: () => void;
  placeholder?: string;
  className?: string;
  direction?: "ltr" | "rtl";
}

export function NewsContentInput({ 
  value, 
  onChange,
  isRunning,
  onRun,
  placeholder = "Enter news content",
  className,
  direction = "ltr"
}: NewsContentInputProps) {
  const handleEmojiSelect = (emoji: string) => {
    onChange(value + emoji);
  };

  return (
    <div className="relative">
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        dir={direction}
        className={cn(
          "w-[843px] h-[133px] resize-none bg-white rounded-lg p-4 text-[#3C3C43] border-[#E4E4E7] flex-shrink-0",
          direction === "rtl" && "text-right",
          className
        )}
      />
      <div className="absolute right-3 top-3 flex items-center gap-2">
        <EmojiPicker onEmojiSelect={handleEmojiSelect} />
      </div>
      <div className="absolute right-3 top-3">
        <EmojiPicker onEmojiSelect={handleEmojiSelect} />
        {onRun && (
          <Button 
            variant="outline"
            size="sm"
            onClick={onRun}
            disabled={isRunning || !value.trim()}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,0,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
            <div className="relative flex items-center gap-2">
              <Sparkles className={cn(
                "h-4 w-4",
                isRunning && "animate-spin"
              )} />
              <span>{isRunning ? "Running..." : "Run"}</span>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
}