"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { XSource } from "@/lib/types/x-feed";

interface XSourcesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sources: XSource[];
  onToggle: (id: string) => void;
  onAdd: (name: string, type: XSource['type']) => void;
  onRemove: (id: string) => void;
}

export function XSourcesDialog({
  open,
  onOpenChange,
  sources,
  onToggle,
  onAdd,
  onRemove
}: XSourcesDialogProps) {
  const [newSourceName, setNewSourceName] = useState("");
  const [activeTab, setActiveTab] = useState<XSource['type']>("account");

  const handleAddSource = () => {
    if (!newSourceName.trim()) return;
    
    const name = activeTab === "account" 
      ? newSourceName.startsWith("@") ? newSourceName : `@${newSourceName}`
      : newSourceName.startsWith("#") ? newSourceName : `#${newSourceName}`;
    
    onAdd(name, activeTab);
    setNewSourceName("");
  };

  const accountSources = sources.filter(s => s.type === "account");
  const hashtagSources = sources.filter(s => s.type === "hashtag");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Manage Sources</DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as XSource['type'])}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Accounts</TabsTrigger>
            <TabsTrigger value="hashtag">Hashtags</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            {accountSources.map((source) => (
              <div key={source.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id={source.id}
                    checked={source.isActive}
                    onCheckedChange={() => onToggle(source.id)}
                  />
                  <label className="text-sm font-medium">{source.name}</label>
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
          </TabsContent>

          <TabsContent value="hashtag" className="space-y-4">
            {hashtagSources.map((source) => (
              <div key={source.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id={source.id}
                    checked={source.isActive}
                    onCheckedChange={() => onToggle(source.id)}
                  />
                  <label className="text-sm font-medium">{source.name}</label>
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
          </TabsContent>
        </Tabs>

        <div className="flex items-center gap-2 mt-4">
          <Input
            value={newSourceName}
            onChange={(e) => setNewSourceName(e.target.value)}
            placeholder={activeTab === "account" ? "@username" : "#hashtag"}
          />
          <Button onClick={handleAddSource}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}