"use client";

import { MetricsGrid } from "./metrics/MetricsGrid";
import { ActivityFeed } from "./activity/ActivityFeed";
import { QuickActions } from "./actions/QuickActions";
import { PopularContent } from "./popular/PopularContent";

export function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
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