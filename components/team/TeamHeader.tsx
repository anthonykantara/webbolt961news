"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus } from "lucide-react";

interface TeamHeaderProps {
  onAddMember: () => void;
}

export function TeamHeader({ onAddMember }: TeamHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">Team Management</h1>
        <Button onClick={onAddMember} className="bg-[#FF0000] hover:bg-[#E60000]">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Member
        </Button>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search team members..."
          className="pl-9 max-w-md"
        />
      </div>
    </div>
  );
}