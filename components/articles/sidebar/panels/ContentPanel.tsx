"use client";

import { StatusSelector } from "../StatusSelector";
import { AuthorSelector } from "../AuthorSelector";
import { ScheduleSelector } from "../ScheduleSelector";
import { WordCount } from "../WordCount";
import { TimeTracking } from "../TimeTracking";
import { ActionButtons } from "../ActionButtons";
import { NotesSection } from "./content/NotesSection";
import { cn } from "@/lib/utils/styles";
import type { ArticleStatus, TimeTrackingData, ArticleContent } from "@/lib/types/article";

interface ContentPanelProps {
  status: ArticleStatus;
  authors: string[];
  content: ArticleContent;
  timeTracking: TimeTrackingData;
  onAuthorsChange: (authors: string[]) => void;
  onUnpublish: () => void;
  onDelete: () => void;
}

export function ContentPanel({
  status,
  authors,
  content,
  timeTracking,
  onAuthorsChange,
  onUnpublish,
  onDelete
}: ContentPanelProps) {
  return (
    <>
      <StatusSelector value={status} />
      <AuthorSelector value={authors} onChange={onAuthorsChange} />
      <ScheduleSelector isScheduled={false} onToggle={() => {}} />
      <WordCount content={content?.story || ""} />
      <TimeTracking data={timeTracking} />
      <NotesSection />
      <ActionButtons
        status={status}
        onUnpublish={onUnpublish}
        onDelete={onDelete}
      />
    </>
  );
}