"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function PromptsSettings() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Updates</h2>
        <div className="space-y-4">
          <div>
            <Label>Run Prompt</Label>
            <Textarea
              placeholder="Enter prompt for running updates..."
              className="mt-2"
              rows={4}
            />
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-8 border-t">
        <h2 className="text-lg font-semibold">Featured Image</h2>
        <div className="space-y-4">
          <div>
            <Label>Generation Prompt</Label>
            <Textarea
              placeholder="Enter prompt for generating featured images..."
              className="mt-2"
              rows={4}
            />
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-8 border-t">
        <h2 className="text-lg font-semibold">Content</h2>
        <div className="space-y-4">
          <div>
            <Label>Editor Prompt</Label>
            <Textarea
              placeholder="Enter prompt for content editing..."
              className="mt-2"
              rows={4}
            />
          </div>

          <div>
            <Label>Section Categorization Prompt</Label>
            <Textarea
              placeholder="Enter prompt for section categorization..."
              className="mt-2"
              rows={4}
            />
          </div>

          <div>
            <Label>SEO Prompt</Label>
            <Textarea
              placeholder="Enter prompt for SEO optimization..."
              className="mt-2"
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}