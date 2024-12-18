"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils/styles";
import { ToolbarButton } from "./ToolbarButton";
import { LinkInput } from "./LinkInput";
import {
  Bold,
  Italic,
  Underline,
  Link,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered
} from "lucide-react";

interface FloatingToolbarProps {
  onFormat: (format: string, value?: string) => void;
}

export function FloatingToolbar({ onFormat }: FloatingToolbarProps) {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState({ x: 100, y: 120 }); // Initial position
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  }, [position]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y
      });
    }
  }, [isDragging, offset]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div 
      className={cn(
        "fixed",
        "flex flex-col items-center gap-1 p-2",
        "bg-white/90 backdrop-blur-sm rounded-lg shadow-lg",
        "border border-gray-200",
        "transition-all duration-200",
        "z-50",
        "cursor-move"
      )}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      onMouseDown={handleMouseDown}
    >
      <ToolbarButton
        icon={Bold}
        tooltip="Bold (⌘B)"
        onClick={() => onFormat("bold")}
      />
      <ToolbarButton
        icon={Italic}
        tooltip="Italic (⌘I)"
        onClick={() => onFormat("italic")}
      />
      <ToolbarButton
        icon={Underline}
        tooltip="Underline (⌘U)"
        onClick={() => onFormat("underline")}
      />
      <div className="w-full h-px bg-gray-200 my-1" />
      <ToolbarButton
        icon={Link}
        tooltip="Add Link (⌘K)"
        onClick={() => setShowLinkInput(true)}
      />
      <div className="w-full h-px bg-gray-200 my-1" />
      <ToolbarButton
        icon={Heading1}
        tooltip="Heading 1"
        onClick={() => onFormat("h1")}
      />
      <ToolbarButton
        icon={Heading2}
        tooltip="Heading 2"
        onClick={() => onFormat("h2")}
      />
      <ToolbarButton
        icon={Heading3}
        tooltip="Heading 3"
        onClick={() => onFormat("h3")}
      />
      <div className="w-full h-px bg-gray-200 my-1" />
      <ToolbarButton
        icon={List}
        tooltip="Bullet List"
        onClick={() => onFormat("bullet")}
      />
      <ToolbarButton
        icon={ListOrdered}
        tooltip="Numbered List"
        onClick={() => onFormat("number")}
      />

      {showLinkInput && (
        <LinkInput
          onSubmit={(url) => {
            onFormat("link", url);
            setShowLinkInput(false);
          }}
          onClose={() => setShowLinkInput(false)}
        />
      )}
    </div>
  );
}