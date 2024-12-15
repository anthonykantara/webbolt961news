"use client";

import { ContentPanel } from "./panels/ContentPanel";
import { SectionPanel } from "./panels/SectionPanel";
import { SeoPanel } from "./panels/SeoPanel";
import { LocationPanel } from "./panels/LocationPanel";
import { TranslatePanel } from "./panels/TranslatePanel";
import { EditorPanel } from "./panels/EditorPanel";
import { DistributePanel } from "./panels/DistributePanel";
import { cn } from "@/lib/utils/styles";
import type { ArticleStatus, TimeTrackingData } from "@/lib/types/article";
import type { ArticleContent } from "@/lib/types/article";

interface EditorSidebarProps {
  activeSection: string;
  status: ArticleStatus;
  authors: string[];
  content: ArticleContent;
  timeTracking: TimeTrackingData;
  onAuthorsChange: (authors: string[]) => void;
  onUnpublish: () => void;
  onDelete: () => void;
}

export function EditorSidebar({
  activeSection,
  status,
  authors,
  content,
  timeTracking,
  onAuthorsChange,
  onUnpublish,
  onDelete
}: EditorSidebarProps) {
  const renderPanel = () => {
    switch (activeSection) {
      case "content":
        return (
          <ContentPanel
            status={status}
            authors={authors}
            content={content}
            timeTracking={timeTracking}
            onAuthorsChange={onAuthorsChange}
            onUnpublish={onUnpublish}
            onDelete={onDelete}
          />
        );
      case "section":
        return <SectionPanel />;
      case "seo":
        return <SeoPanel />;
      case "location":
        return <LocationPanel />;
      case "translate":
        return <TranslatePanel />;
      case "distribute":
        return <DistributePanel />;
      case "editor":
        return <EditorPanel content={content} onAnalyze={() => {}} />;
      default:
        return null;
    }
  };
  return (
    <div className={cn(
      "border-l border-[#F2F4F7] bg-white",
      activeSection === "location" ? "w-[800px] p-0" : 
      activeSection === "translate" ? "w-[800px] p-0" :
      activeSection === "editor" ? "w-[500px] p-6 space-y-6" :
      "w-[383px] p-6 space-y-6"
    )}>
      {renderPanel()}
    </div>
  );
}