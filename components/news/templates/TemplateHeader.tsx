"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TemplateHeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function TemplateHeader({ searchValue, onSearchChange }: TemplateHeaderProps) {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">Manage Templates</h2>
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search templates..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        <Button
          className="bg-[#FF0000] hover:bg-[#E60000] text-white whitespace-nowrap"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </div>
    </div>
  );
}