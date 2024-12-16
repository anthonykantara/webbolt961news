"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AnalyticsFilters() {
  return (
    <div className="flex items-center gap-4">
      <Select defaultValue="all-content">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-content">All Content</SelectItem>
          <SelectItem value="articles">Articles</SelectItem>
          <SelectItem value="updates">Live Updates</SelectItem>
          <SelectItem value="videos">Videos</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all-platforms">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-platforms">All Platforms</SelectItem>
          <SelectItem value="web">Web</SelectItem>
          <SelectItem value="app">App</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}