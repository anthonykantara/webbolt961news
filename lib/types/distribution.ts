import type { LucideIcon } from "lucide-react";

export interface DistributionChannel {
  id: string;
  label: string;
  iconType: string;
  iconColor: string;
}

export interface DistributionState {
  enabledChannels: Set<string>;
}