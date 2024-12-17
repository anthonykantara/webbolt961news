"use client";

import { useState, useEffect } from "react";
import { EditorContent } from "./content/EditorContent";
import { EditorSidebar } from "./sidebar/EditorSidebar";
import { EditorHeader } from "./header/EditorHeader";
import { cn } from "@/lib/utils/styles";
import { FeaturedImageGenerator } from "@/components/featured/FeaturedImageGenerator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { useArticleState } from "@/hooks/useArticleState";

export function ArticleEditor() {
  const router = useRouter();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [activeSection, setActiveSection] = useState("content");
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduledDate, setScheduledDate] = useState<Date | null>(null);
  const {
    content,
    status,
    authors,
    isSponsored,
    timeTracking,
    schedule,
    onContentChange,
    onAuthorsChange,
    onSponsoredChange,
    onScheduleChange,
    onUnpublish,
    onDelete
  } = useArticleState(); 

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDelete = () => {
    onDelete();
    router.push("/news/content/articles");
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
  };

  const renderSection = () => {
    if (activeSection === "featured") {
      return <FeaturedImageGenerator seoKeyword={content.seoKeyword} />;
    }
    
    return (
      <EditorContent
        content={content}
        onChange={onContentChange}
      />
    );
  };
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white">
        <EditorHeader
          elapsedTime={formatTime(elapsedTime)}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onPreview={() => console.log("Preview")}
          onRun={() => console.log("Run")}
        />
        <div className="flex">
          <div className={cn(
            "flex-1",
            activeSection === "featured" && "ml-0"
          )}>
            {renderSection()}
          </div>
          {activeSection !== "featured" && (
            <EditorSidebar
              activeSection={activeSection}
              status={status}
              isScheduled={isScheduled}
              scheduledDate={scheduledDate}
              authors={authors}
              isSponsored={isSponsored}
              schedule={schedule}
              content={content}
              timeTracking={timeTracking}
              onAuthorsChange={onAuthorsChange}
              onScheduleToggle={() => setIsScheduled(!isScheduled)}
              onScheduleChange={setScheduledDate}
              onSponsoredChange={onSponsoredChange}
              onUnpublish={onUnpublish}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}