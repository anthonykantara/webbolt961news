"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Automation, EventConfig } from "@/lib/types/automation";

interface EventTriggerFormProps {
  automation?: Automation;
  onSubmit: (data: Partial<Automation>) => void;
  onCancel: () => void;
}

export function EventTriggerForm({
  automation,
  onSubmit,
  onCancel
}: EventTriggerFormProps) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: automation?.name || '',
      sources: (automation?.configuration as EventConfig)?.sources?.join(', ') || '',
      keywords: (automation?.configuration as EventConfig)?.keywords?.join(', ') || '',
      hashtags: (automation?.configuration as EventConfig)?.hashtags?.join(', ') || '',
      action: (automation?.configuration as EventConfig)?.action || '',
      targetPlatform: (automation?.configuration as EventConfig)?.targetPlatform || ''
    }
  });

  const onFormSubmit = (data: any) => {
    onSubmit({
      ...automation,
      name: data.name,
      type: 'event',
      configuration: {
        type: 'event',
        sources: data.sources.split(',').map((s: string) => s.trim()),
        keywords: data.keywords.split(',').map((k: string) => k.trim()),
        hashtags: data.hashtags.split(',').map((h: string) => h.trim()),
        action: data.action,
        targetPlatform: data.targetPlatform
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 mt-4">
      <div>
        <Label>Name</Label>
        <Input {...register("name")} placeholder="Enter automation name" />
      </div>

      <div>
        <Label>Source Accounts (comma-separated)</Label>
        <Input {...register("sources")} placeholder="@user1, @user2" />
      </div>

      <div>
        <Label>Keywords (comma-separated)</Label>
        <Input {...register("keywords")} placeholder="breaking, urgent" />
      </div>

      <div>
        <Label>Hashtags (comma-separated)</Label>
        <Input {...register("hashtags")} placeholder="#breaking, #news" />
      </div>

      <div>
        <Label>Action</Label>
        <Textarea {...register("action")} placeholder="Enter action code or prompt" />
      </div>

      <div>
        <Label>Target Platform</Label>
        <Input {...register("targetPlatform")} placeholder="Enter target platform" />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}