```typescript
"use client";

import { Card } from "@/components/ui/card";
import { DemographicsChart } from "../audience/DemographicsChart";
import { DeviceBreakdown } from "../audience/DeviceBreakdown";
import { TrafficSources } from "../audience/TrafficSources";
import { UserLoyalty } from "../audience/UserLoyalty";
import type { DateRange } from "../types";

interface AudienceSectionProps {
  dateRange: DateRange;
}

export function AudienceSection({ dateRange }: AudienceSectionProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Audience Insights</h2>
      <div className="grid grid-cols-2 gap-6">
        <DemographicsChart dateRange={dateRange} />
        <DeviceBreakdown dateRange={dateRange} />
        <TrafficSources dateRange={dateRange} />
        <UserLoyalty dateRange={dateRange} />
      </div>
    </Card>
  );
}
```