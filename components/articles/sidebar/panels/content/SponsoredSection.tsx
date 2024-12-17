"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface SponsoredSectionProps {
  isSponsored: boolean;
  onSponsoredChange: (sponsored: boolean) => void;
}

export function SponsoredSection({
  isSponsored,
  onSponsoredChange
}: SponsoredSectionProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="sponsored" className="text-sm font-medium">
          Sponsored
        </Label>
        <Switch
          id="sponsored"
          checked={isSponsored}
          onCheckedChange={onSponsoredChange}
        />
      </div>
    </Card>
  );
}