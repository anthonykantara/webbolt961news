"use client";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface NewsContentInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  direction?: "ltr" | "rtl";
}

export function NewsContentInput({ 
  value, 
  onChange,
  placeholder = "Enter news content",
  className,
  direction = "ltr"
}: NewsContentInputProps) {
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
    </div>
  );
}