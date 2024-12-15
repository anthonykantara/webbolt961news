"use client";

import { useState, useCallback } from "react";
import { ChannelColumn } from "./ChannelColumn";
import { DISTRIBUTION_CHANNELS } from "@/lib/config/distribution";

export function DistributionPanel() {
  const [enabledChannels, setEnabledChannels] = useState<Set<string>>(new Set());

  const handleToggle = useCallback((channelId: string) => {
    setEnabledChannels((prev) => {
      const next = new Set(prev);
      if (next.has(channelId)) {
        next.delete(channelId);
      } else {
        next.add(channelId);
      }
      return next;
    });
  }, []);

  return (
    <div className="w-[493px] h-[235px] bg-white rounded-lg border border-[#E4E4E7] p-6">
      <div className="grid grid-cols-2 gap-x-12">
        <ChannelColumn
          channels={DISTRIBUTION_CHANNELS.left}
          enabledChannels={enabledChannels}
          onToggle={handleToggle}
        />
        <ChannelColumn
          channels={DISTRIBUTION_CHANNELS.right}
          enabledChannels={enabledChannels}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}