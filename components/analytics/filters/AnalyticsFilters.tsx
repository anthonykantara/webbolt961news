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

      <Select defaultValue="all-staff">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Staff Member" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-staff">All Staff</SelectItem>
          <SelectItem value="editors">Editors</SelectItem>
          <SelectItem value="writers">Writers</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" className="ml-auto">
        <Download className="h-4 w-4 mr-2" />
        Export Data
      </Button>
    </div>
  );
}