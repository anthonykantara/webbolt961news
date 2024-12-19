"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

interface SectionsHeaderProps {
  onAddSection: () => void;
  onAddTopic: () => void;
}

export function SectionsHeader({ onAddSection, onAddTopic }: SectionsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Sections & Topics</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search sections and topics..."
            className="pl-9 w-[300px]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={onAddTopic}
            variant="outline"
            className="bg-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Topic
          </Button>
          <Button
            onClick={onAddSection}
            className="bg-[#FF0000] hover:bg-[#E60000]"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Section
          </Button>
        </div>
      </div>
    </div>
  );
}