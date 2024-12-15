"use client";

import { Channel } from "@/components/news/distribution/Channel";
import { Monitor, Smartphone, Facebook, Twitter, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const CHANNELS = [
  {
    id: 'website',
    label: 'Website',
    icon: <Monitor className="h-5 w-5" />,
    iconColor: '#8A8A8E'
  },
  {
    id: 'app',
    label: 'App',
    icon: <Smartphone className="h-5 w-5" />,
    iconColor: '#8A8A8E'
  },
  {
    id: 'bilingual',
    label: 'Bilingual',
    icon: <MessageCircle className="h-5 w-5" />,
    iconColor: '#25D366'
  },
  {
    id: 'english-whatsapp',
    label: 'English',
    icon: <MessageCircle className="h-5 w-5" />,
    iconColor: '#25D366'
  },
  {
    id: 'arabic',
    label: 'Arabic',
    icon: <Facebook className="h-5 w-5" />,
    iconColor: '#1877F2'
  },
  {
    id: 'english-facebook',
    label: 'English',
    icon: <Facebook className="h-5 w-5" />,
    iconColor: '#1877F2'
  },
  {
    id: 'x',
    label: 'X',
    icon: <Twitter className="h-5 w-5" />,
    iconColor: '#000000'
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: <Send className="h-5 w-5" />,
    iconColor: '#229ED9'
  }
];

export function DistributePanel() {
  // Initialize all channels as enabled
  const [enabledChannels, setEnabledChannels] = useState<Set<string>>(
    new Set(CHANNELS.map(channel => channel.id))
  );

  const handleToggle = (channelId: string) => {
    setEnabledChannels(prev => {
      const next = new Set(prev);
      if (next.has(channelId)) {
        next.delete(channelId);
      } else {
        next.add(channelId);
      }
      return next;
    });
  };

  return (
    <div className="w-full bg-white rounded-lg border border-[#E4E4E7] p-6">
      <div className="space-y-2">
        {CHANNELS.map((channel) => (
          <Channel
            key={channel.id}
            label={channel.label}
            icon={channel.icon}
            enabled={enabledChannels.has(channel.id)}
            onToggle={() => handleToggle(channel.id)}
            iconColor={channel.iconColor}
          />
        ))}
      </div>
    </div>
  );
}