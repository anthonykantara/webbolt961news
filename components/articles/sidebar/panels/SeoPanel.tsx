"use client";

import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"; 
import { Sparkles, Link as LinkIcon, Copy } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import { KeywordInput } from "./KeywordInput";
import { useSettings } from "@/lib/hooks/useSettings";
import type { ArticleContent } from "@/lib/types/article";

interface SeoPanelProps {
  content?: ArticleContent;
}

interface RelatedArticle {
  id: string;
  title: string;
  url: string;
}

const MOCK_RELATED: RelatedArticle[] = [
  {
    id: "1",
    title: "Previous Urban Development Projects in Downtown Beirut",
    url: "/news/previous-urban-development-beirut"
  },
  {
    id: "2", 
    title: "Historic Buildings in Beirut: A Cultural Heritage",
    url: "/news/historic-buildings-beirut"
  },
  {
    id: "3",
    title: "Sustainable Architecture in Modern Lebanon",
    url: "/news/sustainable-architecture-lebanon"
  }
];

export function SeoPanel({ content }: SeoPanelProps) {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchDescription, setSearchDescription] = useState("");
  const [permalink, setPermalink] = useState("");
  const [primaryKeyword, setPrimaryKeyword] = useState<string>("");
  const [secondaryKeywords, setSecondaryKeywords] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { settings } = useSettings();

  // Simulate Arze recommendations
  useEffect(() => {
    const timer = setTimeout(() => {
      setPrimaryKeyword("Urban Development Beirut");
      setSecondaryKeywords(["heritage preservation", "smart city", "downtown Beirut"]);
      setSearchTitle("Major $500M Urban Renewal Project Announced for Downtown Beirut");
      setSearchDescription("Beirut announces comprehensive $500M urban renewal project focusing on heritage preservation, green spaces, and smart city integration. Learn about the transformative plans for the historic city center.");
      setPermalink("urban-renewal-project-downtown-beirut");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleGenerateSEO = async () => {
    if (!content?.story) return;
    
    setIsGenerating(true);
    try {
      // In a real app, call your AI API here using the SEO prompt
      const prompt = settings.prompts.content.seo;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock response
      setSearchTitle("Major $500M Urban Renewal Project Announced for Downtown Beirut");
      setSearchDescription("Beirut announces comprehensive $500M urban renewal project focusing on heritage preservation, green spaces, and smart city integration. Learn about the transformative plans for the historic city center.");
      setPermalink("urban-renewal-project-downtown-beirut");
      setPrimaryKeyword("Urban Development Beirut");
      setSecondaryKeywords(["heritage preservation", "smart city", "downtown Beirut"]);
    } catch (error) {
      console.error("Failed to generate SEO:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5 text-xs">
          <div className="relative">
            <Sparkles className="h-3.5 w-3.5 text-red-500 animate-pulse" />
            <div className="absolute inset-0 bg-red-500/20 blur-sm animate-pulse" />
          </div>
          <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-medium">
            Arze-powered
          </span>
        </div>
      </div>

      <Button
        onClick={handleGenerateSEO}
        disabled={!content?.story || isGenerating}
        className={cn(
          "w-full relative overflow-hidden transition-all duration-300",
          "bg-gradient-to-r from-[#FF0000] via-[#FF2B2B] to-[#FF5555]",
          "hover:from-[#E60000] hover:via-[#E62B2B] hover:to-[#E65555]",
          "shadow-[0_0_20px_rgba(255,0,0,0.15)]",
          "hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]",
          "border border-red-400/30",
          "font-medium tracking-wide",
          isGenerating && "animate-pulse"
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
        <div className="relative flex items-center justify-center gap-2">
          <Sparkles className={cn(
            "h-4 w-4",
            isGenerating && "animate-spin"
          )} />
          <span className="text-white">
            {isGenerating ? "Generating..." : "SEO"}
          </span>
        </div>
      </Button>
      <div className="relative space-y-4">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-500 block font-medium">Keywords</label>
              <KeywordInput
                primaryKeyword={primaryKeyword}
                secondaryKeywords={secondaryKeywords}
                onPrimaryChange={setPrimaryKeyword}
                onSecondaryChange={setSecondaryKeywords}
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 mb-3 block font-medium">Search Title</label>
            <div className="relative">
              <Textarea
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                placeholder="Enter search title"
                className={cn(
                  "resize-none overflow-hidden pr-16",
                  "min-h-[44px] max-h-[120px]",
                  "whitespace-pre-wrap break-words",
                  "leading-relaxed",
                  "transition-all duration-200"
                )}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${target.scrollHeight}px`;
                }}
              />
              <span className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 text-xs",
                searchTitle.length > 60 ? "text-red-500" : "text-gray-400"
              )}>
                {searchTitle.length}/60
              </span>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 mb-3 block font-medium">Search Description</label>
            <div className="relative">
              <Textarea
                value={searchDescription}
                onChange={(e) => setSearchDescription(e.target.value)}
                placeholder="Enter search description"
                className={cn(
                  "resize-none overflow-hidden pr-16",
                  "min-h-[100px] max-h-[200px]",
                  "whitespace-pre-wrap break-words",
                  "leading-relaxed",
                  "transition-all duration-200"
                )}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = `${target.scrollHeight}px`;
                }}
              />
              <span className={cn(
                "absolute right-3 top-3 text-xs",
                searchDescription.length > 160 ? "text-red-500" : "text-gray-400"
              )}>
                {searchDescription.length}/160
              </span>
            </div>
          </div>

          <div>
            <div className="space-y-2">
              <span className="text-sm text-gray-400 font-mono opacity-60">
                news.961.co/en/
              </span>
              <Input 
                value={permalink}
                onChange={(e) => setPermalink(e.target.value)}
                className="h-11 font-mono w-full"
                placeholder="enter-permalink"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium">Suggested Links</h3>
        </div>
        <div className="space-y-3">
          {MOCK_RELATED.map((article) => (
            <div 
              key={article.id}
              className="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <LinkIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm leading-normal">{article.title}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 flex-shrink-0 hover:bg-gray-100"
                onClick={() => handleCopyLink(article.url)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}