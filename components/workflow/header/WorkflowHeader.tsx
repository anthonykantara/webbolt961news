"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

interface WorkflowHeaderProps {
  onCreateTask: () => void;
}

export function WorkflowHeader({ onCreateTask }: WorkflowHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Content Workflow</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search tasks..."
            className="pl-9 w-[300px]"
          />
        </div>
        <Button
          onClick={onCreateTask}
          className="bg-[#FF0000] hover:bg-[#E60000]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Task
        </Button>
      </div>
    </div>
  );
}