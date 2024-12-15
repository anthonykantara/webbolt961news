```typescript
"use client";

import { Card } from "@/components/ui/card";
import { formatNumber, formatPercentage } from "../utils/formatting";

interface ContentStatsProps {
  views: {
    total: number;
    app: number;
    web: number;
  };
  users: {
    total: number;
    registered: number;
    visitors: number;
    newRegistrations: number;
  };
  engagement: {
    reactions: number;
    comments: number;
    shares: number;
  };
}

export function ContentStats({ views, users, engagement }: ContentStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Views</h3>
        <p className="text-2xl font-semibold">{formatNumber(views.total)}</p>
        <div className="mt-2 space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">App</span>
            <span>{formatPercentage(views.app, views.total)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Web</span>
            <span>{formatPercentage(views.web, views.total)}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Users</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Registered</span>
            <span>{formatPercentage(users.registered, users.total)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Visitors</span>
            <span>{formatPercentage(users.visitors, users.total)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>New Registrations</span>
            <span>+{formatNumber(users.newRegistrations)}</span>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Engagement</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Reactions</span>
            <span>{formatNumber(engagement.reactions)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Comments</span>
            <span>{formatNumber(engagement.comments)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shares</span>
            <span>{formatNumber(engagement.shares)}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
```