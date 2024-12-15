"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChannelList } from "../messaging/ChannelList";
import { MessageList } from "../messaging/MessageList";
import { useMessagingSources } from "@/lib/hooks/useMessagingSources";
import type { Source } from "@/lib/types/source";

interface MessagingPanelProps {
  type: "telegram" | "whatsapp";
}

export function MessagingPanel({ type }: MessagingPanelProps) {
  const { sources, posts } = useMessagingSources(type);
  const [selectedSource, setSelectedSource] = useState<Source>(sources[0]);

  const handleAddChannel = () => {
    // Implement add channel logic
    console.log("Add channel clicked");
  };

  return (
    <div className="grid grid-cols-[250px,1fr] gap-6">
      <Card>
        <ChannelList
          sources={sources}
          selectedSource={selectedSource}
          onSourceSelect={setSelectedSource}
          onAddChannel={handleAddChannel}
        />
      </Card>

      <Card>
        <MessageList posts={posts} />
      </Card>
    </div>
  );
}