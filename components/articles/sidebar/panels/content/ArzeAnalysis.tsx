"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, AlertTriangle, Sparkles, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import type { ArticleContent } from "@/lib/types/article";

interface ArzeAnalysis {
  title: string;
  status: "pass" | "fail" | "warn";
  message?: string;
}

interface ArzeAnalysisProps {
  content: ArticleContent;
}

export function ArzeAnalysis({ content }: ArzeAnalysisProps) {
  const analyses: ArzeAnalysis[] = [
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
      status: "pass"
    },
    {
      title: "Content Guidelines",
      status: "pass"
    }
  ];

  const getIcon = (status: ArzeAnalysis["status"]) => {
    switch (status) {
      case "pass":
        return <Check className="h-4 w-4 text-green-500" />;
      case "fail":
        return <X className="h-4 w-4 text-red-500" />;
      case "warn":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
    }
  };

  const suggestedHeadlines = [
    "Urban Renewal: $500M Project Set to Transform Downtown Beirut",
    "Historic Beirut District to Undergo Major $500M Revitalization",
    "Beirut Announces Landmark $500M Urban Development Initiative"
  ];

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <div className="space-y-3">
          {analyses.map((analysis, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-center justify-between py-1",
                index !== analyses.length - 1 && "border-b border-gray-100"
              )}
            >
              <div className="flex items-center gap-2">
                {getIcon(analysis.status)}
                <span className="text-sm">{analysis.title}</span>
              </div>
              {analysis.message && (
                <span className="text-xs text-gray-500">{analysis.message}</span>
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
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
      </Card>

      <Button 
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        Run Analysis Again
      </Button>
    </div>
  );
}