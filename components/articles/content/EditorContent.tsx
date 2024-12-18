"use client";

import { useState, useRef, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { BlockList } from "./blocks/BlockList";
import { AddBlockButton } from "./blocks/AddBlockButton";
import { FloatingToolbar } from "./toolbar/FloatingToolbar";
import { detectSocialLinks, getSocialEmbedCode, type EmbedConfig } from "@/lib/utils/embeds";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import type { Block } from "@/lib/types/article";

interface EditorContentProps {
  content: {
    headline: string;
    blocks: Block[];
  };
  onChange: (field: "headline" | "blocks", value: any) => void;
  onSave: () => void;
}

export function EditorContent({ content, onChange, onSave }: EditorContentProps) {
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHeadlineChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    // Auto-adjust height
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
    onChange("headline", target.value);
  };

  const handleAddBlock = (type: Block["type"], index: number) => {
    const newBlock: Block = {
      id: crypto.randomUUID(),
      type,
      content: ""
    };

    const newBlocks = [...content.blocks];
    newBlocks.splice(index, 0, newBlock);
    onChange("blocks", newBlocks);
    setSelectedBlockId(newBlock.id);
  };

  const handleBlockChange = (id: string, newContent: string) => {
    const newBlocks = content.blocks.map(block =>
      block.id === id ? { ...block, content: newContent } : block
    );
    onChange("blocks", newBlocks);
  };

  const handleBlockDelete = (id: string) => {
    const newBlocks = content.blocks.filter(block => block.id !== id);
    onChange("blocks", newBlocks);
    setSelectedBlockId(null);
  };

  const handleBlockMove = (fromIndex: number, toIndex: number) => {
    const newBlocks = [...content.blocks];
    const [movedBlock] = newBlocks.splice(fromIndex, 1);
    newBlocks.splice(toIndex, 0, movedBlock);
    onChange("blocks", newBlocks);
  };

  const handleFormat = (format: string, value?: string) => {
    // Implement text formatting logic here
    console.log("Format:", format, value);
  };

  const handleStoryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange("story", e.target.value);
  };
  const handleStoryKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const target = e.currentTarget;
      const { selectionStart } = target;
      const textBeforeCursor = target.value.slice(0, selectionStart);
      const textAfterCursor = target.value.slice(selectionStart);

      // Create new block from text after cursor
      if (textAfterCursor.trim()) {
        const newBlock: Block = {
          id: crypto.randomUUID(),
          type: "text",
          content: textAfterCursor.trim()
        };
        onChange("blocks", [...content.blocks, newBlock]);
      }

      // Update current block with text before cursor
      target.value = textBeforeCursor;
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  return (
    <div className="editor-content-container" ref={containerRef}>
      <div className="content-spacing">
        {/* Headline */}
        <div className="mb-12 flex justify-center">
          <Textarea
            value={content.headline}
            onChange={handleHeadlineChange}
            placeholder="Enter headline"
            className={cn(
              "w-[1100px] resize-none overflow-hidden",
              "text-4xl font-semibold leading-tight",
              "headline-input",
              "min-h-[44px] max-h-[200px]"
            )}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
        </div>
        
        {/* Story */}
        <div className="mb-12 flex justify-center">
          <Textarea
            value={content.story}
            onChange={handleStoryChange}
            placeholder="Write your story..."
            className={cn(
              "w-[800px] min-h-[400px] resize-none",
              "text-lg leading-relaxed",
              "story-input"
            )}
          />
        </div>

        {/* Floating Toolbar */}
        <FloatingToolbar onFormat={handleFormat} />

        {/* Blocks */}
        <div className="space-y-8 flex justify-center">
          <BlockList
            blocks={content.blocks}
            selectedBlockId={selectedBlockId}
            onBlockSelect={setSelectedBlockId}
            onBlockChange={handleBlockChange}
            onBlockDelete={handleBlockDelete}
            onBlockMove={handleBlockMove}
          />

          {/* Add block button at the end */}
          <div className="w-[800px]">
            <AddBlockButton
              onAdd={(type) => handleAddBlock(type, content.blocks.length)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}