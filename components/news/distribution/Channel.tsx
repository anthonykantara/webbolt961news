"use client";

import { Switch } from "@/components/ui/switch";

interface ChannelProps {
  label: string;
  icon: React.ReactNode;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  iconColor?: string;
}

export function Channel({ label, icon, enabled, onToggle, iconColor }: ChannelProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5" style={{ color: iconColor }}>{icon}</div>
        <span className="text-sm text-[#3C3C43]">{label}</span>
      </div>
      <Switch
        checked={enabled}
        onCheckedChange={onToggle}
      />
    </div>
  );
}