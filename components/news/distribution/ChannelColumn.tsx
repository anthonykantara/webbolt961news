"use client";

import { Channel } from "./Channel";
import type { DistributionChannel } from "@/lib/types/distribution";
import { 
  Monitor, 
  Smartphone, 
  Facebook, 
  Twitter, 
  Send, 
  MessageCircle 
} from "lucide-react";

const iconMap = {
  Monitor: Monitor,
  Smartphone: Smartphone,
  Facebook: Facebook,
  Twitter: Twitter,
  Send: Send,
  WhatsApp: MessageCircle
} as const;

interface ChannelColumnProps {
  channels: DistributionChannel[];
  enabledChannels: Set<string>;
  onToggle: (channelId: string) => void;
}

export function ChannelColumn({ channels, enabledChannels, onToggle }: ChannelColumnProps) {
  return (
    <div className="space-y-2">
      {channels.map((channel) => {
        const IconComponent = iconMap[channel.iconType as keyof typeof iconMap];
        return (
          <Channel
            key={channel.id}
            label={channel.label}
            icon={IconComponent && <IconComponent className="h-5 w-5" />}
            enabled={enabledChannels.has(channel.id)}
            onToggle={() => onToggle(channel.id)}
            iconColor={channel.iconColor}
          />
        );
      })}
    </div>
  );
}