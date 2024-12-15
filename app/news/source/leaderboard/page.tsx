"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LeaderboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Source Leaderboard</h1>
      
      <Tabs defaultValue="today" className="space-y-6">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>

        <TabsContent value="today">
          <div className="grid gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-medium mb-4">Most Active Sources</h2>
              <div className="space-y-4">
                {/* Placeholder for source rankings */}
                <p className="text-gray-500">No data available for today</p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-medium mb-4">Top Breaking News Sources</h2>
              <div className="space-y-4">
                {/* Placeholder for breaking news rankings */}
                <p className="text-gray-500">No data available for today</p>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="week">
          {/* Weekly stats content */}
          <p className="text-gray-500">Weekly statistics will be shown here</p>
        </TabsContent>

        <TabsContent value="month">
          {/* Monthly stats content */}
          <p className="text-gray-500">Monthly statistics will be shown here</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}