"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Automation, ScheduleConfig } from "@/lib/types/automation";

interface ScheduleTriggerFormProps {
  automation?: Automation;
  onSubmit: (data: Partial<Automation>) => void;
  onCancel: () => void;
}

export function ScheduleTriggerForm({
  automation,
  onSubmit,
  onCancel
}: ScheduleTriggerFormProps) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      name: automation?.name || '',
      frequency: (automation?.configuration as ScheduleConfig)?.frequency || 'daily',
      time: (automation?.configuration as ScheduleConfig)?.time || '',
      timezone: (automation?.configuration as ScheduleConfig)?.timezone || '',
      action: (automation?.configuration as ScheduleConfig)?.action || '',
      targetPlatform: (automation?.configuration as ScheduleConfig)?.targetPlatform || ''
    }
  });

  const onFormSubmit = (data: any) => {
    onSubmit({
      ...automation,
      name: data.name,
      type: 'schedule',
      configuration: {
        type: 'schedule',
        frequency: data.frequency,
        time: data.time,
        timezone: data.timezone,
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
        <Label>Frequency</Label>
        <Select
          value={watch("frequency")}
          onValueChange={(value) => setValue("frequency", value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Time</Label>
        <Input {...register("time")} type="time" />
      </div>

      <div>
        <Label>Timezone</Label>
        <Input {...register("timezone")} placeholder="e.g., Asia/Beirut" />
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