"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ActivityItem } from "./ActivityItem";
import { ACTIVITIES } from "./constants";

export function ActivityFeed() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ScrollArea className="h-[400px]">
        <div className="space-y-4">
          {ACTIVITIES.map((activity, i) => (
            <ActivityItem key={i} activity={activity} />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}