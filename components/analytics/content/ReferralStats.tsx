```typescript
"use client";

import { Card } from "@/components/ui/card";
import { formatNumber } from "../utils/formatting";

interface ReferralStatsProps {
  referrers: Array<{
    name: string;
    views: number;
  }>;
}

export function ReferralStats({ referrers }: ReferralStatsProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium text-gray-500 mb-4">Top Referrers</h3>
      <div className="space-y-2">
        {referrers.map((referrer) => (
          <div key={referrer.name} className="flex justify-between">
            <span className="text-sm">{referrer.name}</span>
            <span className="text-sm text-gray-500">
              {formatNumber(referrer.views)} views
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
```