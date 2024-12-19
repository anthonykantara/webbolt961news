"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ChevronsUpDown, Search, Sparkles, Star, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import { useSettings } from "@/lib/hooks/useSettings";
import type { ArticleContent } from "@/lib/types/article";

const SECTIONS = [
  { id: "news", label: "News" },
  { id: "politics", label: "Politics" },
  { id: "business", label: "Business" },
  { id: "culture", label: "Culture" },
  { id: "tech", label: "Technology" },
  { id: "health", label: "Health" }
];

const TOPICS = [
  { id: "economy", label: "Economy" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "development", label: "Development" },
  { id: "urban-planning", label: "Urban Planning" },
  { id: "construction", label: "Construction" },
  { id: "heritage", label: "Heritage" },
  { id: "environment", label: "Environment" },
  { id: "transportation", label: "Transportation" }
];

interface SectionPanelProps {
  content?: ArticleContent;
}

export function SectionPanel({ content }: SectionPanelProps) {
  const [open, setOpen] = useState(false);
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [primarySection, setPrimarySection] = useState<string | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState<{
    sections: string[];
    topics: string[];
  }>({ sections: [], topics: [] });
  const { settings } = useSettings();

  useEffect(() => {
    const analyzeContent = async () => {
      if (!content?.story) return;
      
      setIsAnalyzing(true);
      try {
        // In a real app, call your AI API here using the categorization prompt
        const prompt = settings.prompts.content.categorization;
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setRecommendations({
          sections: ["news", "business"],
          topics: ["urban-planning", "development", "infrastructure"]
        });
        
        // Auto-select recommended sections and topics
        setSelectedSections(["news", "business"]);
        setPrimarySection("news");
        setSelectedTopics(["urban-planning", "development", "infrastructure"]);
      } catch (error) {
        console.error("Failed to analyze content:", error);
      } finally {
        setIsAnalyzing(false);
      }
    };

    analyzeContent();
  }, [content?.story, settings.prompts.content.categorization]);

  const handleSectionToggle = (sectionId: string) => {
    setSelectedSections(prev => {
      const isSelected = prev.includes(sectionId);
      if (isSelected) {
        // If removing primary section, set new primary if other sections exist
        if (sectionId === primarySection) {
          const remaining = prev.filter(id => id !== sectionId);
          if (remaining.length > 0) {
            setPrimarySection(remaining[0]);
          } else {
            setPrimarySection(null);
          }
        }
        return prev.filter(id => id !== sectionId);
      } else {
        // If first section, make it primary
        if (prev.length === 0) {
          setPrimarySection(sectionId);
        }
        return [...prev, sectionId];
      }
    });
  };

  const handleSetPrimary = (sectionId: string) => {
    if (selectedSections.includes(sectionId)) {
      setPrimarySection(sectionId);
    }
  };

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const filteredTopics = TOPICS.filter(topic =>
    topic.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card className="p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-red-400/5 to-red-500/5" />
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium">Section</h3>
            {recommendations.sections.length > 0 && (
              <div className="flex items-center gap-1.5 text-xs">
                <div className="relative">
                  <Sparkles className="h-3.5 w-3.5 text-red-500 animate-pulse" />
                  <div className="absolute inset-0 bg-red-500/20 blur-sm animate-pulse" />
                </div>
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-medium">
                  Arze recommended
                </span>
              </div>
            )}
          </div>
          <div className="space-y-2">
            {SECTIONS.map((section) => {
              const isSelected = selectedSections.includes(section.id);
              const isPrimary = primarySection === section.id;
              const isRecommended = recommendations.sections.includes(section.id);

              return (
                <div
                  key={section.id}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-lg transition-all duration-300",
                    isSelected && "bg-gradient-to-r from-red-50/50 to-red-100/50",
                    !isSelected && "hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => handleSectionToggle(section.id)}
                      className="data-[state=checked]:bg-[#FF0000] data-[state=checked]:border-[#FF0000]"
                    />
                    <span className="text-sm">{section.label}</span>
                    {isRecommended && (
                      <div className="relative">
                        <Sparkles className="h-3 w-3 text-red-500 animate-pulse" />
                        <div className="absolute inset-0 bg-red-500/20 blur-sm animate-pulse" />
                      </div>
                    )}
                  </div>
                  {isSelected && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "px-2 h-7",
                        isPrimary && "text-amber-500"
                      )}
                      onClick={() => handleSetPrimary(section.id)}
                    >
                      <Star className={cn(
                        "h-4 w-4",
                        isPrimary ? "fill-current" : "fill-none"
                      )} />
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card className="p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-red-400/5 to-red-500/5" />
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium">Topics</h3>
            {recommendations.topics.length > 0 && (
              <div className="flex items-center gap-1.5 text-xs">
                <div className="relative">
                  <Sparkles className="h-3.5 w-3.5 text-red-500 animate-pulse" />
                  <div className="absolute inset-0 bg-red-500/20 blur-sm animate-pulse" />
                </div>
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent font-medium">
                  Arze recommended
                </span>
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filteredTopics.map((topic) => {
                const isSelected = selectedTopics.includes(topic.id);
                const isRecommended = recommendations.topics.includes(topic.id);
                
                return (
                  <Badge
                    key={topic.id}
                    variant={isSelected ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer transition-all duration-300",
                      isSelected && "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-transparent",
                      !isSelected && isRecommended && "border-red-200 bg-gradient-to-r from-red-50/50 to-red-100/50 hover:from-red-100/50 hover:to-red-200/50",
                      !isSelected && !isRecommended && "hover:bg-gray-100"
                    )}
                    onClick={() => handleTopicToggle(topic.id)}
                  >
                    <div className="flex items-center gap-1.5">
                      {isRecommended && !isSelected && (
                        <div className="relative">
                          <Sparkles className="h-3 w-3 text-amber-500 animate-pulse" />
                          <div className="absolute inset-0 bg-amber-500/20 blur-sm animate-pulse" />
                        </div>
                      )}
                      <span>{topic.label}</span>
                    </div>
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}