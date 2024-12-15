"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Check, X, AlertTriangle, RefreshCw, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import type { ArticleContent } from "@/lib/types/article";
import { useState } from "react";

interface EditorState {
  isAnalyzing: boolean;
  isEditing: boolean;
  hasAnalyzed: boolean;
}

interface WritingAnalysis {
  title: string;
  status: "pass" | "fail" | "warn";
  message?: string;
}

interface ChecklistItem {
  title: string;
  status: "complete" | "incomplete" | "warning";
  message?: string;
}

interface EditorPanelProps {
  content: ArticleContent;
  onAnalyze: () => void;
}

export function EditorPanel({ content, onAnalyze }: EditorPanelProps) {
  const [state, setState] = useState<EditorState>({
    isAnalyzing: false,
    isEditing: false,
    hasAnalyzed: false
  });

  const handleAnalyze = async () => {
    setState(prev => ({ ...prev, isAnalyzing: true }));
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate analysis
    setState(prev => ({ ...prev, isAnalyzing: false, hasAnalyzed: true }));
  };

  const handleEdit = async () => {
    setState(prev => ({ ...prev, isEditing: true }));
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate editing
    setState(prev => ({ ...prev, isEditing: false }));
  };

  const writingAnalysis: WritingAnalysis[] = [
    {
      title: "Conversational Tone",
      status: "pass",
      message: "Natural and engaging writing style"
    },
    {
      title: "Grammar & Spelling",
      status: "pass"
    },
    {
      title: "Sentence Length",
      status: "warn",
      message: "2 sentences exceed recommended length"
    },
    {
      title: "Paragraph Length",
      status: "pass",
      message: "All paragraphs within guidelines"
    },
    {
      title: "Content Guidelines",
      status: "pass",
      message: "No restricted words found"
    }
  ];

  const checklist: ChecklistItem[] = [
    {
      title: "Featured Images",
      status: "complete",
      message: "Both horizontal and vertical images set"
    },
    {
      title: "Section & Topics",
      status: "complete",
      message: "Primary section and topics selected"
    },
    {
      title: "SEO",
      status: "warning",
      message: "Missing 2 secondary keywords"
    },
    {
      title: "Location",
      status: "incomplete",
      message: "No location set"
    },
    {
      title: "Translations",
      status: "incomplete",
      message: "2 languages pending translation"
    },
    {
      title: "Distribution",
      status: "complete",
      message: "All channels configured"
    }
  ];

  const suggestedHeadlines = [
    "Urban Renewal: $500M Project Set to Transform Downtown Beirut",
    "Historic Beirut District to Undergo Major $500M Revitalization",
    "Beirut Announces Landmark $500M Urban Development Initiative"
  ];

  const getIcon = (status: "pass" | "fail" | "warn" | "complete" | "incomplete" | "warning") => {
    switch (status) {
      case "pass":
      case "complete":
        return <Check className="h-4 w-4 text-green-500" />;
      case "fail":
      case "incomplete":
        return <X className="h-4 w-4 text-red-500" />;
      case "warn":
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-2">
        <div className="relative">
          <Sparkles className="h-4 w-4 text-red-500 animate-pulse" />
          <div className="absolute inset-0 bg-red-500/20 blur-sm animate-pulse" />
        </div>
        <span className={cn(
          "text-sm font-medium",
          "bg-gradient-to-r from-red-500 to-red-600",
          "bg-clip-text text-transparent"
        )}>
          Arze-powered
        </span>
      </div>

      <Button 
        onClick={handleAnalyze}
        disabled={state.isAnalyzing || state.isEditing}
        className={cn(
          "w-full relative overflow-hidden transition-all duration-300",
          "bg-gradient-to-r from-[#FF0000] via-[#FF2B2B] to-[#FF5555]",
          "hover:from-[#E60000] hover:via-[#E62B2B] hover:to-[#E65555]",
          "shadow-[0_0_20px_rgba(255,0,0,0.15)]",
          "hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]",
          "border border-red-400/30",
          "font-medium tracking-wide",
          (state.isAnalyzing || state.isEditing) && "opacity-50"
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
        <div className="relative flex items-center justify-center gap-2">
          <RefreshCw className={cn(
            "h-4 w-4",
            state.isAnalyzing && "animate-spin"
          )} />
          <span className="text-white">
            {state.isAnalyzing ? "Analyzing..." : "Analyze with Arze"}
          </span>
        </div>
      </Button>

      {state.hasAnalyzed && (
        <>
          <div className="space-y-3">
            <h3 className="text-sm font-medium mb-4">Writing Analysis</h3>
            <div className="space-y-3">
              {writingAnalysis.map((item, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-center justify-between py-1",
                    index !== writingAnalysis.length - 1 && "border-b border-gray-100"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {getIcon(item.status)}
                    <span className="text-sm">{item.title}</span>
                  </div>
                  {item.message && (
                    <span className="text-xs text-gray-500">{item.message}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium mb-4">Pre-publish Checklist</h3>
            <div className="space-y-3">
              {checklist.map((item, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-center justify-between py-1",
                    index !== checklist.length - 1 && "border-b border-gray-100"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {getIcon(item.status)}
                    <span className="text-sm">{item.title}</span>
                  </div>
                  {item.message && (
                    <span className="text-xs text-gray-500">{item.message}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium mb-3">Suggested Headlines</h3>
            <div className="space-y-2">
              {suggestedHeadlines.map((headline, index) => (
                <div
                  key={index}
                  className="text-sm p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  {headline}
                </div>
              ))}
            </div>
          </div>

          <Button 
            onClick={handleEdit}
            disabled={state.isAnalyzing || state.isEditing}
            className={cn(
              "w-full relative overflow-hidden transition-all duration-300",
              "bg-gradient-to-r from-[#FF0000] via-[#FF2B2B] to-[#FF5555]",
              "hover:from-[#E60000] hover:via-[#E62B2B] hover:to-[#E65555]",
              "shadow-[0_0_20px_rgba(255,0,0,0.15)]",
              "hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]",
              "border border-red-400/30",
              "font-medium tracking-wide",
              (state.isAnalyzing || state.isEditing) && "opacity-50"
            )}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
            <div className="relative flex items-center justify-center gap-2">
              <Wand2 className={cn(
                "h-4 w-4",
                state.isEditing && "animate-spin"
              )} />
              <span className="text-white">
                {state.isEditing ? "Editing..." : "Edit with Arze"}
              </span>
            </div>
          </Button>
        </>
      )}
    </div>
  );
}