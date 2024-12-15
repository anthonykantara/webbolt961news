"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Clock, AlertCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { Automation } from "@/lib/types/automation";

interface AutomationCardProps {
  automation: Automation;
  onToggle: (id: string) => void;
  onEdit: (automation: Automation) => void;
  onDelete: (id: string) => void;
}

export function AutomationCard({
  automation,
  onToggle,
  onEdit,
  onDelete
}: AutomationCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-medium">{automation.name}</h3>
            {automation.lastStatus && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                automation.lastStatus === 'success' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {automation.lastStatus}
              </span>
            )}
          </div>
          
          <div className="space-y-1 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {automation.lastRun && (
                <span>Last run {formatDistanceToNow(automation.lastRun)} ago</span>
              )}
            </div>
            {automation.type === 'schedule' && automation.nextRun && (
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                <span>Next run {formatDistanceToNow(automation.nextRun)}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Switch
            checked={automation.status === 'active'}
            onCheckedChange={() => onToggle(automation.id)}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(automation)}
            className="h-8 w-8"
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(automation.id)}
            className="h-8 w-8 text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}