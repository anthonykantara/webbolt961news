"use client";

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

export function NewsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">961 News</h1>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">
          <MoreVertical className="h-4 w-4" />
        </Button>
        <Button>Run</Button>
        <Button variant="destructive">Publish</Button>
      </div>
    </div>
  );
}