"use client";

import { Card } from "@/components/ui/card";
import type { ContentStats } from "./types";
import { formatNumber, formatPercentage } from "./utils";

interface ContentMetricsProps {
  stats: ContentStats;
}

export function ContentMetrics({ stats }: ContentMetricsProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Views</h3>
        <p className="text-2xl font-semibold mb-2">{formatNumber(stats.views)}</p>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">App</span>
            <span>{formatPercentage(stats.distribution.app, stats.views)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Web</span>
            <span>{formatPercentage(stats.distribution.web, stats.views)}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Users</h3>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-500">Registered</span>
            <span>{formatPercentage(stats.users.registered, stats.views)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Visitors</span>
            <span>{formatPercentage(stats.users.visitors, stats.views)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">New Registrations</span>
            <span>{formatNumber(stats.newRegistrations)}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Engagement</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Reactions</span>
            <span>{formatNumber(stats.reactions)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Comments</span>
            <span>{formatNumber(stats.comments)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shares</span>
            <span>{formatNumber(stats.shares)}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}