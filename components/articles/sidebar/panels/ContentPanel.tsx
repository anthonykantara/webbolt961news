"use client";

import { StatusSelector } from "../StatusSelector";
import { AuthorSelector } from "../AuthorSelector";
import { ScheduleSelector } from "../ScheduleSelector";
import { WordCount } from "../WordCount";
import { TimeTracking } from "../TimeTracking";
import { ActionButtons } from "../ActionButtons";
import { NotesSection } from "./content/NotesSection";
import { SponsoredSection } from "./content/SponsoredSection";
import { cn } from "@/lib/utils/styles";
import type { ArticleStatus, TimeTrackingData, ArticleContent } from "@/lib/types/article";

interface ContentPanelProps {
  status: ArticleStatus;
  authors: string[];
  content: ArticleContent;
  isScheduled: boolean;
  scheduledDate: Date | null;
  isSponsored: boolean;
  timeTracking: TimeTrackingData;
  onAuthorsChange: (authors: string[]) => void;
  onScheduleToggle: () => void;
  onScheduleChange: (date: Date | null) => void;
  onSponsoredChange: (sponsored: boolean) => void;
  onUnpublish: () => void;
  onDelete: () => void;
}

export function ContentPanel({
  status,
  authors,
  content,
  isScheduled,
  scheduledDate,
  isSponsored,
  timeTracking,
  onAuthorsChange,
  onScheduleToggle,
  onScheduleChange,
  onSponsoredChange,
  onUnpublish,
  onDelete
}: ContentPanelProps) {
  return (
    <>
      <StatusSelector value={status} />
      <AuthorSelector value={authors} onChange={onAuthorsChange} />
      <ScheduleSelector 
        isScheduled={isScheduled}
        scheduledDate={scheduledDate}
        onToggle={onScheduleToggle}
        onScheduleChange={onScheduleChange}
      />
      <WordCount content={content?.story || ""} />
      <TimeTracking data={timeTracking} />
      <NotesSection />
      <SponsoredSection
        isSponsored={isSponsored}
        onSponsoredChange={onSponsoredChange}
      />
      <ActionButtons
        status={status}
        onUnpublish={onUnpublish}
        onDelete={onDelete}
      />
    </>
  );
}