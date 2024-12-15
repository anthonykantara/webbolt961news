"use client";

import { Globe } from "lucide-react";

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-4">
        <Globe className="h-12 w-12 text-gray-300" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No news items available
      </h3>
      <p className="text-sm text-gray-500">
        Try activating more sources or check back later for updates
      </p>
    </div>
  );
}