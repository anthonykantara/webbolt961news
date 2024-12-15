"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventTriggerForm } from "./forms/EventTriggerForm";
import { ScheduleTriggerForm } from "./forms/ScheduleTriggerForm";
import type { Automation } from "@/lib/types/automation";

interface AutomationDialogProps {
  automation?: Automation;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: Partial<Automation>) => void;
}

export function AutomationDialog({
  automation,
  open,
  onOpenChange,
  onSave
}: AutomationDialogProps) {
  const [activeTab, setActiveTab] = useState(automation?.type || 'event');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {automation ? 'Edit Automation' : 'Create Automation'}
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="event">Event-based</TabsTrigger>
            <TabsTrigger value="schedule">Time-based</TabsTrigger>
          </TabsList>

          <TabsContent value="event">
            <EventTriggerForm
              automation={automation}
              onSubmit={onSave}
              onCancel={() => onOpenChange(false)}
            />
          </TabsContent>

          <TabsContent value="schedule">
            <ScheduleTriggerForm
              automation={automation}
              onSubmit={onSave}
              onCancel={() => onOpenChange(false)}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}