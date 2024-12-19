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
import { TranslatePanel } from "./sidebar/panels/TranslatePanel";
import { LocationPanel } from "./sidebar/panels/LocationPanel";

export function ArticleEditor() {
  const router = useRouter();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [activeSection, setActiveSection] = useState("content");
  const {
    content,
    status,
    authors,
    isScheduled,
    isSponsored,
    timeTracking,
    schedule,
    onContentChange,
    onAuthorsChange,
    onSponsoredChange,
    onScheduleChange,
    onScheduleToggle,
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
    
    if (activeSection === "translate") {
      return <TranslatePanel />;
    }
    
    if (activeSection === "location") {
      return <LocationPanel />;
    }
    
    return (
      <EditorContent
        content={content}
        onChange={onContentChange}
        // implement onSave logic
        onSave={function (): void {
          throw new Error("Function not implemented.");
        }} 
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
            !["featured", "translate", "location"].includes(activeSection) && "ml-0"
          )}>
            {renderSection()}
          </div>
          {!["featured", "translate", "location"].includes(activeSection) && (
            <EditorSidebar
              activeSection={activeSection}
              status={status}
              isScheduled={isScheduled}
              scheduledDate={schedule}
              authors={authors}
              isSponsored={isSponsored}
              content={content}
              timeTracking={timeTracking}
              onAuthorsChange={onAuthorsChange}
              onScheduleToggle={onScheduleToggle}
              onScheduleChange={onScheduleChange}
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