"use client";

import { Card } from "@/components/ui/card";
import { DemographicsChart } from "./DemographicsChart";
import { GeographicMap } from "./GeographicMap";
import { DeviceBreakdown } from "./DeviceBreakdown";
import { TrafficSources } from "./TrafficSources";
import { UserLoyalty } from "./UserLoyalty";
import { EngagementTimes } from "./EngagementTimes";
import type { DateRange } from "../types";

interface AudienceInsightsProps {
  dateRange: DateRange;
}

export function AudienceInsights({ dateRange }: AudienceInsightsProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-6">Audience Insights</h2>
      <div className="grid grid-cols-2 gap-6">
        <DemographicsChart dateRange={dateRange} />
        <GeographicMap dateRange={dateRange} />
        <DeviceBreakdown dateRange={dateRange} />
        <TrafficSources dateRange={dateRange} />
        <UserLoyalty dateRange={dateRange} />
        <EngagementTimes dateRange={dateRange} />
      </div>
    </Card>
  );
}