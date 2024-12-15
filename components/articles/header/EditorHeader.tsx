"use client";

import { Button } from "@/components/ui/button";
import { EditorTimer } from "./EditorTimer";
import { EditorPreview } from "./EditorPreview";
import { EditorStatus } from "./EditorStatus";
import { EditorNav } from "./EditorNav";
import { cn } from "@/lib/utils";

interface EditorHeaderProps {
  elapsedTime: string;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onPreview: () => void;
  onRun: () => void;
}

export function EditorHeader({ 
  elapsedTime, 
  activeSection,
  onSectionChange,
  onPreview, 
  onRun 
}: EditorHeaderProps) {
  return (
    <header className="bg-white">
      <div className="h-16 px-6 flex items-center justify-between border-b border-gray-200">
        <EditorNav activeSection={activeSection} onSectionChange={onSectionChange} />
        
        <div className="flex items-center gap-[30px]">
          <EditorTimer time={elapsedTime} />
          <EditorPreview onPreview={onPreview} />
          <EditorStatus status="saved" />
          <Button
            onClick={onRun}
            className={cn(
              "bg-[#FF0000] hover:bg-[#E60000]",
              "ml-[10px]"
            )}
          >
            Review
          </Button>
        </div>
      </div>
    </header>
  );
}