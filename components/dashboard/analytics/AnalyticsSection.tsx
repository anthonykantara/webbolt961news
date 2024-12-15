"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EngagementChart } from "./charts/EngagementChart";
import { DemographicsChart } from "./charts/DemographicsChart";
import { SocialChart } from "./charts/SocialChart";
import { TrafficChart } from "./charts/TrafficChart";

export function AnalyticsSection() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Analytics</h2>
      <Tabs defaultValue="engagement">
        <TabsList>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
        </TabsList>

        <TabsContent value="engagement" className="mt-4">
          <EngagementChart />
        </TabsContent>

        <TabsContent value="demographics" className="mt-4">
          <DemographicsChart />
        </TabsContent>

        <TabsContent value="social" className="mt-4">
          <SocialChart />
        </TabsContent>

        <TabsContent value="traffic" className="mt-4">
          <TrafficChart />
        </TabsContent>
      </Tabs>
    </Card>
  );
}