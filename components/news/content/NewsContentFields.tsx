"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface NewsContentFieldsProps {
  title: string;
  content: string;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
}

export function NewsContentFields({
  title,
  content,
  onTitleChange,
  onContentChange
}: NewsContentFieldsProps) {
  return (
    <div className="w-[401px] h-[295px] bg-white rounded-lg border border-[#E4E4E7] p-6 space-y-2">
      <Input
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Enter title"
        className="w-[351px] h-[40px] text-[#71717A] placeholder:text-[#71717A]"
      />
      <Textarea
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="Enter content"
        className="w-[351px] h-[200px] resize-none text-[#71717A] placeholder:text-[#71717A]"
      />
    </div>
  );
}