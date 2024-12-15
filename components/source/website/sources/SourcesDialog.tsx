"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus } from "lucide-react";
import { useState } from "react";
import type { WebsiteSource } from "@/lib/types/website-feed";

interface SourcesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sources: WebsiteSource[];
  onToggle: (id: string) => void;
  onAdd: (url: string, name: string) => void;
  onRemove: (id: string) => void;
}

export function SourcesDialog({
  open,
  onOpenChange,
  sources,
  onToggle,
  onAdd,
  onRemove
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
              <div key={source.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
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
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(source.id)}
                  className="h-8 w-8 text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
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