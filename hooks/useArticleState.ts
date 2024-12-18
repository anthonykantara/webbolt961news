"use client";

import { useState } from "react";
import type { ArticleStatus, ArticleContent, TimeTrackingData } from "@/lib/types/article";

export function useArticleState() {
  const [content, setContent] = useState<ArticleContent>({
    headline: "",
    blocks: [],
    story: ""
  });
  
  const [status, setStatus] = useState<ArticleStatus>("draft");
  const [authors, setAuthors] = useState<string[]>([]);
  const [isScheduled, setIsScheduled] = useState(false);
  const [schedule, setSchedule] = useState<Date | null>(null);
  const [isSponsored, setIsSponsored] = useState(false);
  const [timeTracking] = useState<TimeTrackingData>({
    writing: 0,
    editing: 0,
    total: 0
  });

  const handleContentChange = (field: keyof ArticleContent, value: any) => {
    setContent(prev => ({ ...prev, [field]: value }));
  };

  const handleScheduleToggle = () => setIsScheduled(!isScheduled)

  const handleUnpublish = () => {
    if (status === "published") {
      setStatus("draft");
    }
  };

  const handleDelete = () => {
    // Implement delete logic
    console.log("Delete article");
  };

  return {
    content,
    status,
    authors,
    isSponsored,
    isScheduled,
    schedule,
    timeTracking,
    onContentChange: handleContentChange,
    onAuthorsChange: setAuthors,
    onSponsoredChange: setIsSponsored,
    onScheduleToggle: handleScheduleToggle,
    onScheduleChange: setSchedule,
    onUnpublish: handleUnpublish,
    onDelete: handleDelete
  };
}