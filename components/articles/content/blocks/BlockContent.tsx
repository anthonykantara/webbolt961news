"use client";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils/styles";
import { BlockType } from "@/lib/types/article";
import { ImageBlock } from "./ImageBlock";
import { ListBlock } from "./ListBlock";
import { EmbedBlock } from "./EmbedBlock";

interface BlockContentProps {
  type: BlockType;
  content: string;
  onChange: (content: string) => void;
}

export function BlockContent({ type, content, onChange }: BlockContentProps) {
  switch (type) {
    case "text":
      return (
        <Textarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "min-h-[100px] resize-none border-none px-4 py-3",
            "focus-visible:ring-0 focus-visible:outline-none",
            "text-lg leading-relaxed"
          )}
          placeholder="Start writing..."
        />
      );

    case "list":
      return <ListBlock content={content} onChange={onChange} />;

    case "image":
      return <ImageBlock content={content} onChange={onChange} />;

    case "embed":
      return <EmbedBlock content={content} onChange={onChange} />;

    default:
      return null;
  }
}