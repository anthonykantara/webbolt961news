"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Plus, FileText, Video } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { LANGUAGES } from "@/lib/config/languages";
import type { ContentFilters } from "@/lib/types/content";
import { useRouter } from "next/navigation";

interface ContentHeaderProps {
  filters: ContentFilters;
  onFiltersChange: (filters: ContentFilters) => void;
}

export function ContentHeader({ filters, onFiltersChange }: ContentHeaderProps) {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const router = useRouter();

  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Content Management</h1>
        <div className="flex items-center gap-4">
          <Select
            value={filters.language}
            onValueChange={(language) => onFiltersChange({ ...filters, language })}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(LANGUAGES).map(([code, label]) => (
                <SelectItem key={code} value={code}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button 
            onClick={() => setShowCreateDialog(true)}
            className="bg-[#FF0000] hover:bg-[#E60000]"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            value={filters.search}
            onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
            placeholder="Search content..."
            className="pl-9"
          />
        </div>
        <Select
          value={filters.type}
          onValueChange={(type) => onFiltersChange({ ...filters, type })}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="article">Articles</SelectItem>
            <SelectItem value="video">Videos</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={filters.status}
          onValueChange={(status) => onFiltersChange({ ...filters, status })}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="draft">Drafts</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="published">Published</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Content</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button variant="outline"
              onClick={() => {
                router.push("/news/content/articles/new");
                setShowCreateDialog(false);
              }}
              className="h-24 flex flex-col items-center justify-center gap-2"
            >
              <FileText className="h-6 w-6" />
              Article
            </Button>
            <Button variant="outline"
              onClick={() => {
                router.push("/news/content/video/new");
                setShowCreateDialog(false);
              }}
              className="h-24 flex flex-col items-center justify-center gap-2"
            >
              <Video className="h-6 w-6" />
              Video
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}