"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SourcesList } from "./sources/SourcesList";
import { AddSourceForm } from "./sources/AddSourceForm";
import type { NewsSource } from "@/lib/types/news-feed";

interface SourcesDialogProps {
  sources: NewsSource[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onToggle: (sourceId: string) => void;
  onAdd: (url: string, name: string) => void;
}

export function SourcesDialog({
  sources,
  open,
  onOpenChange,
  onToggle,
  onAdd
}: SourcesDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Manage Sources</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <SourcesList sources={sources} onToggle={onToggle} />
          <AddSourceForm onAdd={onAdd} />
        </div>
      </DialogContent>
    </Dialog>
  );
}