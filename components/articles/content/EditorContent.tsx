"use client";

import { useRef, useEffect, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FloatingToolbar } from "./toolbar/FloatingToolbar";
import { applyFormatting, getSelectionInfo, setSelection } from "@/lib/utils/text-formatting";

interface EditorContentProps {
  content: {
    headline: string;
    story: string;
  };
  onChange: (field: "headline" | "story", value: any) => void;
  onSave: () => void;
}

export function EditorContent({ content, onChange, onSave }: EditorContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHeadlineChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    // Auto-adjust height
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
    onChange("headline", target.value);
  };

  const handleFormat = (format: string, value?: string) => {
    if (format === "ai-content") {
      try {
        const aiContent = JSON.parse(value || "{}");
        onChange("headline", aiContent.headline || "");
        onChange("story", aiContent.story || "");
      } catch (error) {
        console.error("Failed to parse AI content:", error);
      }
      return;
    }

    const storyTextarea = document.querySelector<HTMLTextAreaElement>('.story-input');
    if (!storyTextarea) return;

    const { text, start, end } = getSelectionInfo(storyTextarea);
    const newText = applyFormatting(text, start, end, format, value);
    
    onChange("story", newText);
    
    // Restore selection after state update
    setTimeout(() => {
      const newEnd = end + (newText.length - text.length);
      setSelection(storyTextarea, start, newEnd);
    }, 0);
  };

  const handleStoryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange("story", e.target.value);
  };

  const handleStoryKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      const target = e.currentTarget;
      const { selectionStart, value } = target;
      const textBeforeCursor = value.slice(0, selectionStart);
      const textAfterCursor = value.slice(selectionStart);

      if (e.shiftKey) {
        // Shift+Enter: Insert line break
        e.preventDefault();
        const newValue = textBeforeCursor + "\n" + textAfterCursor;
        onChange("story", newValue);
        
        // Move cursor after the line break
        setTimeout(() => {
          target.selectionStart = target.selectionEnd = selectionStart + 1;
        }, 0);
      } else {
        // Enter: Insert paragraph break
        e.preventDefault();
        const newValue = textBeforeCursor + "\n\n" + textAfterCursor;
        onChange("story", newValue);
        
        // Move cursor after the paragraph break
        setTimeout(() => {
          target.selectionStart = target.selectionEnd = selectionStart + 2;
        }, 0);
      }
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
            onKeyDown={handleStoryKeyDown}
            placeholder="Write your story..."
            className={cn(
              "w-[800px] min-h-[400px] resize-none",
              "text-lg leading-relaxed",
              "story-input whitespace-pre-wrap"
            )}
          />
        </div>

        {/* Floating Toolbar */}
        <FloatingToolbar onFormat={handleFormat} content={content} />
      </div>
    </div>
  );
}