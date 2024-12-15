"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AutomationCard } from "./AutomationCard";
import { AutomationDialog } from "./AutomationDialog";
import { AutomationFilters } from "./AutomationFilters";
import type { Automation, SortField } from "@/lib/types/automation";

const MOCK_AUTOMATIONS: Automation[] = [
  {
    id: "1",
    name: "Breaking News Alert",
    type: "event",
    status: "active",
    configuration: {
      type: "event",
      sources: ["@961News"],
      keywords: ["breaking", "urgent"],
      hashtags: ["#BreakingNews"],
      action: "Send notification to all platforms",
      targetPlatform: "all"
    },
    lastRun: new Date(Date.now() - 1000 * 60 * 30),
    lastStatus: "success",
    createdAt: new Date()
  },
  {
    id: "2",
    name: "Daily Weather Update",
    type: "schedule",
    status: "active",
    configuration: {
      type: "schedule",
      frequency: "daily",
      time: "08:00",
      timezone: "Asia/Beirut",
      action: "Fetch and post weather updates",
      targetPlatform: "telegram"
    },
    lastRun: new Date(Date.now() - 1000 * 60 * 60 * 24),
    nextRun: new Date(Date.now() + 1000 * 60 * 60 * 12),
    lastStatus: "success",
    createdAt: new Date()
  }
];

export function AutomationsDashboard() {
  const [automations, setAutomations] = useState<Automation[]>(MOCK_AUTOMATIONS);
  const [editingAutomation, setEditingAutomation] = useState<Automation | undefined>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sortField, setSortField] = useState<SortField>("createdAt");

  const handleToggle = (id: string) => {
    setAutomations(prev => prev.map(automation => 
      automation.id === id
        ? { ...automation, status: automation.status === 'active' ? 'paused' : 'active' }
        : automation
    ));
  };

  const handleEdit = (automation: Automation) => {
    setEditingAutomation(automation);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setAutomations(prev => prev.filter(automation => automation.id !== id));
  };

  const handleSave = (data: Partial<Automation>) => {
    if (editingAutomation) {
      setAutomations(prev => prev.map(automation =>
        automation.id === editingAutomation.id
          ? { ...automation, ...data }
          : automation
      ));
    } else {
      const newAutomation: Automation = {
        id: crypto.randomUUID(),
        status: 'active',
        createdAt: new Date(),
        ...data
      } as Automation;
      setAutomations(prev => [...prev, newAutomation]);
    }
    setIsDialogOpen(false);
    setEditingAutomation(undefined);
  };

  const sortedAutomations = [...automations].sort((a, b) => {
    switch (sortField) {
      case "status":
        return a.status.localeCompare(b.status);
      case "type":
        return a.type.localeCompare(b.type);
      case "lastRun":
        return (b.lastRun?.getTime() || 0) - (a.lastRun?.getTime() || 0);
      default:
        return b.createdAt.getTime() - a.createdAt.getTime();
    }
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Automations</h1>
        <div className="flex items-center gap-4">
          <AutomationFilters
            sortField={sortField}
            onSortChange={setSortField}
          />
          <Button
            onClick={() => {
              setEditingAutomation(undefined);
              setIsDialogOpen(true);
            }}
            className="bg-[#FF0000] hover:bg-[#E60000]"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Automation
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {sortedAutomations.map((automation) => (
          <AutomationCard
            key={automation.id}
            automation={automation}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <AutomationDialog
        automation={editingAutomation}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSave={handleSave}
      />
    </div>
  );
}