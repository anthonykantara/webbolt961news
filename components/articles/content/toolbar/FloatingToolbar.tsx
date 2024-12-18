"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed left-[calc(20%-200px)] top-[120px]",
        "flex flex-col items-center gap-1 p-2",
        "bg-white/90 backdrop-blur-sm rounded-lg shadow-lg",
        "border border-gray-200",
        "transition-all duration-200",
        "z-50"
      )}
      style={{ transform: `translateY(${scrollY}px)` }}
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