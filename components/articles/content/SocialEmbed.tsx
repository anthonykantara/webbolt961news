"use client";

import { useEffect, useRef } from 'react';
import type { EmbedConfig } from '@/lib/utils/embeds';

interface SocialEmbedProps {
  config: EmbedConfig;
}

export function SocialEmbed({ config }: SocialEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Load appropriate social media SDK based on type
    switch (config.type) {
      case 'twitter':
        // Load Twitter widget
        if (!(window as any).twttr) {
          const script = document.createElement('script');
          script.src = 'https://platform.twitter.com/widgets.js';
          script.async = true;
          document.body.appendChild(script);
        } else {
          (window as any).twttr.widgets.load(containerRef.current);
        }
        break;

      case 'instagram':
        // Load Instagram embed
        if (!(window as any).instgrm) {
          const script = document.createElement('script');
          script.src = '//www.instagram.com/embed.js';
          script.async = true;
          document.body.appendChild(script);
        } else {
          (window as any).instgrm.Embeds.process(containerRef.current);
        }
        break;

      case 'facebook':
        // Load Facebook SDK
        if (!(window as any).FB) {
          const script = document.createElement('script');
          script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0';
          script.async = true;
          document.body.appendChild(script);
        } else {
          (window as any).FB.XFBML.parse(containerRef.current);
        }
        break;
    }
  }, [config]);

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-[600px] mx-auto flex justify-center"
      dangerouslySetInnerHTML={{ __html: config.embedCode }}
    />
  );
}