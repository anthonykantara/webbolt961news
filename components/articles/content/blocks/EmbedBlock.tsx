"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import { SocialEmbed } from "../SocialEmbed";
import { detectSocialLinks, getSocialEmbedCode } from "@/lib/utils/embeds";

interface EmbedBlockProps {
  content: string;
  onChange: (content: string) => void;
}

export function EmbedBlock({ content, onChange }: EmbedBlockProps) {
  const [url, setUrl] = useState(content);
  const [embedConfig, setEmbedConfig] = useState(getSocialEmbedConfig(content));

  const handleUrlSubmit = (url: string) => {
    const config = getSocialEmbedConfig(url);
    if (config) {
      setUrl(url);
      setEmbedConfig(config);
      onChange(url);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste social media URL"
        />
        <Button
          variant="outline"
          onClick={() => handleUrlSubmit(url)}
        >
          <Link className="h-4 w-4 mr-2" />
          Embed
        </Button>
      </div>

      {embedConfig && (
        <div className="flex justify-center">
          <SocialEmbed config={embedConfig} />
        </div>
      )}
    </div>
  );
}