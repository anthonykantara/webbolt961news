"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ContentTable } from "@/components/content/table/ContentTable";
import { useContentData } from "@/lib/hooks/useContentData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";
import { LANGUAGES } from "@/lib/config/languages";
import type { ContentFilters } from "@/lib/types/content";

export default function ArticlesPage() {
  const router = useRouter();
  const [filters, setFilters] = useState<ContentFilters>({
    search: "",
    type: "article",
    status: "all",
    dateRange: null,
    authors: [],
    language: "en"
  });

  const { items, isLoading } = useContentData(filters);

  return (
    <div className="p-6">
      <div className="mb-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Articles</h1>
          <div className="flex items-center gap-4">
            <Select
              value={filters.language}
              onValueChange={(language) => setFilters({ ...filters, language })}
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
              onClick={() => router.push("/news/content/articles/new")}
              className="bg-[#FF0000] hover:bg-[#E60000]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Article
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              placeholder="Search articles..."
              className="pl-9"
            />
          </div>
          <Select
            value={filters.status}
            onValueChange={(status) => setFilters({ ...filters, status })}
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
      </div>

      <ContentTable items={items} isLoading={isLoading} />
    </div>
  );
}