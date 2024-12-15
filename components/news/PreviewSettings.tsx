"use client";

import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { DATE_FORMAT, type NewsPriority } from "@/lib/constants";

interface PreviewSettingsProps {
  priority: NewsPriority;
}

export function PreviewSettings({ priority }: PreviewSettingsProps) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Preview Settings</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between py-2 border-b">
          <span>General</span>
          <span className="text-sm text-gray-500 capitalize">{priority} Priority</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span>Schedule</span>
          <span className="text-sm text-gray-500">{format(new Date(), DATE_FORMAT)}</span>
        </div>
      </div>
    </Card>
  );
}