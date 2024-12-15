"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface NewsFormProps {
  title: string;
  subtitle: string;
  onTitleChange: (value: string) => void;
  onSubtitleChange: (value: string) => void;
}

export function NewsForm({ title, subtitle, onTitleChange, onSubtitleChange }: NewsFormProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6 space-y-4">
        <div className="space-y-4">
          <Input 
            placeholder="Enter title" 
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="text-lg font-semibold"
          />
          <Input 
            placeholder="Enter subtitle"
            value={subtitle}
            onChange={(e) => onSubtitleChange(e.target.value)}
          />
          <Textarea 
            placeholder="Enter news content"
            className="min-h-[200px]"
          />
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <Input placeholder="National Museum of Beirut" />
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            Map Preview
          </div>
        </div>
      </Card>
    </div>
  );
}