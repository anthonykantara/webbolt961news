"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDistanceToNow } from "date-fns";
import { MapPin, Play, Image as ImageIcon } from "lucide-react";
import type { Tip } from "@/lib/types/source";

interface TipDetailProps {
  tip: Tip;
  onRun: () => void;
}

export function TipDetail({ tip, onRun }: TipDetailProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-medium">
            {tip.submitter.name}
            <span className="text-gray-500 ml-2">@{tip.submitter.username}</span>
          </h3>
          <p className="text-sm text-gray-500">
            {formatDistanceToNow(tip.timestamp)} ago
          </p>
        </div>
        <Button
          onClick={onRun}
          className="bg-[#FF0000] hover:bg-[#E60000]"
        >
          Run
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-4">
          <p className="text-gray-900">{tip.content}</p>

          {tip.hasMedia && (
            <div className="grid grid-cols-2 gap-2">
              {/* Placeholder for media gallery */}
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          )}

          {tip.location && (
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span>{tip.location.name}</span>
            </div>
          )}

          {tip.voiceNote && (
            <div className="flex items-center gap-2 text-sm">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Play className="h-4 w-4" />
              </Button>
              <div className="h-1 flex-1 bg-gray-200 rounded-full">
                <div className="h-full w-0 bg-gray-400 rounded-full" />
              </div>
              <span className="text-gray-500">0:00</span>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}