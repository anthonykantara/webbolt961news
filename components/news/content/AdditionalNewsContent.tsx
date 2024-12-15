"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface AdditionalNewsContentProps {
  title: string;
  content: string;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  direction?: "ltr" | "rtl";
  placeholder?: {
    title: string;
    content: string;
  };
}

export function AdditionalNewsContent({
  title,
  content,
  onTitleChange,
  onContentChange,
  direction = "ltr",
  placeholder = {
    title: "Fire at the National Museum of Beirut",
    content: "readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }
}: AdditionalNewsContentProps) {
  return (
    <div className="w-[401px] h-[295px] bg-white rounded-lg border border-[#E4E4E7] p-6 space-y-2">
      <div className="relative">
        <Input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder={placeholder.title}
          className={cn(
            "w-[351px] h-[40px] text-[#71717A] placeholder:text-[#71717A]",
            direction === "rtl" && "text-right"
          )}
          dir={direction}
        />
      </div>
      <div className="relative">
        <Textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder={placeholder.content}
          className={cn(
            "w-[351px] h-[200px] resize-none text-[#71717A] placeholder:text-[#71717A]",
            direction === "rtl" && "text-right"
          )}
          dir={direction}
        />
      </div>
    </div>
  );
}