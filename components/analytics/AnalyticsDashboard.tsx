"use client";

import { useState } from "react";
import { DateRangeSelector } from "./filters/DateRangeSelector";
import { AnalyticsFilters } from "./filters/AnalyticsFilters";
import { CoreMetrics } from "./sections/CoreMetrics";
import { EngagementMetrics } from "./sections/EngagementMetrics";
import { UserGrowthMetrics } from "./sections/UserGrowthMetrics";
import { TrafficMetrics } from "./sections/TrafficMetrics";
import { ContentPerformance } from "./sections/ContentPerformance";
import { JournalistPerformance } from "./sections/JournalistPerformance";
import { AppMetrics } from "./sections/AppMetrics";
import { ShareMetrics } from "./sections/ShareMetrics";
import { ExportButton } from "./components/ExportButton";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date()
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <div className="flex items-center gap-4">
          <DateRangeSelector value={dateRange} onChange={setDateRange} />
          <AnalyticsFilters />
          <ExportButton />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-white border-b rounded-none w-full justify-start h-12 p-0">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="journalists">Journalists</TabsTrigger>
          <TabsTrigger value="app">App</TabsTrigger>
          <TabsTrigger value="sharing">Sharing</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <CoreMetrics dateRange={dateRange} />
          <div className="grid grid-cols-2 gap-6">
            <EngagementMetrics dateRange={dateRange} />
            <UserGrowthMetrics dateRange={dateRange} />
          </div>
        </TabsContent>

        <TabsContent value="content">
          <ContentPerformance dateRange={dateRange} />
        </TabsContent>

        <TabsContent value="users">
          <UserGrowthMetrics dateRange={dateRange} detailed />
        </TabsContent>

        <TabsContent value="traffic">
          <TrafficMetrics dateRange={dateRange} />
        </TabsContent>

        <TabsContent value="engagement">
          <EngagementMetrics dateRange={dateRange} detailed />
        </TabsContent>

        <TabsContent value="journalists">
          <JournalistPerformance dateRange={dateRange} />
        </TabsContent>

        <TabsContent value="app">
          <AppMetrics dateRange={dateRange} />
        </TabsContent>

        <TabsContent value="sharing">
          <ShareMetrics dateRange={dateRange} />
        </TabsContent>
      </Tabs>
    </div>
  );
}