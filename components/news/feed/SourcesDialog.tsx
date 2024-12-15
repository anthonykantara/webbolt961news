"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
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
  const [newSourceUrl, setNewSourceUrl] = useState("");
  const [newSourceName, setNewSourceName] = useState("");
  const [error, setError] = useState("");

  const handleAddSource = () => {
    setError("");
    
    if (!newSourceUrl.trim() || !newSourceName.trim()) {
      setError("Both URL and name are required");
      return;
    }

    try {
      new URL(newSourceUrl);
      onAdd(newSourceUrl.trim(), newSourceName.trim());
      setNewSourceUrl("");
      setNewSourceName("");
    } catch {
      setError("Please enter a valid URL");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Manage Sources</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            {sources.map((source) => (
              <div key={source.id} className="flex items-center gap-3">
                <Checkbox
                  id={source.id}
                  checked={source.isActive}
                  onCheckedChange={() => onToggle(source.id)}
                />
                <label
                  htmlFor={source.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {source.name}
                </label>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Input
              value={newSourceName}
              onChange={(e) => setNewSourceName(e.target.value)}
              placeholder="Enter source name"
            />
            <Input
              value={newSourceUrl}
              onChange={(e) => setNewSourceUrl(e.target.value)}
              placeholder="Enter source URL"
            />
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            <Button onClick={handleAddSource} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Source
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}