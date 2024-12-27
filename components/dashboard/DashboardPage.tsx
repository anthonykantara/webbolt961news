"use client";

import { MetricsGrid } from "./metrics/MetricsGrid";
import { ActivityFeed } from "./activity/ActivityFeed";
import { QuickActions } from "./actions/QuickActions";
import { PopularContent } from "./popular/PopularContent";
import { NotificationBell } from "@/components/notifications/NotificationBell";

export function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <NotificationBell />
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* Main content area */}
        <div className="col-span-8 space-y-6">
          <MetricsGrid />
          <PopularContent />
        </div>

        {/* Sidebar */}
        <div className="col-span-4">
          <QuickActions />
          <div className="mt-6">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}