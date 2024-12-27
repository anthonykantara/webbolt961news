"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/styles";
import { ToolbarButton } from "./ToolbarButton";
import { LinkInput } from "./LinkInput";
import { EmojiPicker } from "./EmojiPicker";
import {
  Bold,
  Italic,
  Underline,
  Link,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Sparkles
} from "lucide-react";
import { useSettings } from "@/lib/hooks/useSettings";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface FloatingToolbarProps {
  onFormat: (format: string, value?: string) => void;
  content?: {
    headline: string;
    story: string;
  };
}

export function FloatingToolbar({ onFormat, content }: FloatingToolbarProps) {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const { settings } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAiGenerate = async () => {
    if (!content?.story) return;
    
    setIsGenerating(true);
    try {
      // In a real app, call your AI API here using the editor prompt
      const prompt = settings.prompts.content.editor;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock response - in a real app this would come from the AI
      const aiContent = {
        headline: "Major $500M Urban Renewal Project Announced for Downtown Beirut",
        story: "Officials today unveiled an ambitious $500 million urban renewal project for downtown Beirut, marking a significant milestone in the city's development. The comprehensive initiative aims to preserve the area's rich heritage while modernizing critical infrastructure.\n\nThe project, set to commence in early 2024, will focus on:\n\n- Restoration of historic buildings\n- Implementation of smart city technologies\n- Creation of new green spaces\n- Upgrade of transportation networks\n\nLocal architects and urban planners have praised the project's balanced approach to modernization while maintaining the district's cultural identity."
      };
      
      // Update both headline and story
      onFormat("ai-content", JSON.stringify(aiContent));
    } catch (error) {
      console.error("Failed to generate content:", error);
    } finally {
      setIsGenerating(false);
    }
  };

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
      <EmojiPicker 
        onSelect={(emoji) => onFormat("emoji", emoji)} 
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
      
      <div className="w-full h-px bg-gray-200 my-1" />
      
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleAiGenerate}
            disabled={isGenerating || !content?.story}
            className={cn(
              "relative h-8 w-8 rounded-md",
              "hover:bg-gray-100 transition-colors",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            <Sparkles className={cn(
              "h-4 w-4 text-red-500",
              isGenerating ? "animate-spin" : "animate-pulse",
              "absolute inset-0 m-auto"
            )} />
            <div className="absolute inset-0 bg-red-500/20 blur-sm animate-pulse" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          Generate with Arze
        </TooltipContent>
      </Tooltip>

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