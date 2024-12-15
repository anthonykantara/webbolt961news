"use client";

import { Eye, Users, DollarSign, Share2, MessageSquare, Smile } from "lucide-react";

const ICON_COLORS = {
  Eye: "text-purple-500",
  Users: "text-green-500",
  DollarSign: "text-blue-500",
  Share2: "text-orange-500",
  MessageSquare: "text-pink-500",
  Smile: "text-yellow-500"
} as const;

const ICONS = {
  Eye,
  Users,
  DollarSign,
  Share2,
  MessageSquare,
  Smile
} as const;

interface MetricIconProps {
  name: keyof typeof ICONS;
}

export function MetricIcon({ name }: MetricIconProps) {
  const Icon = ICONS[name];
  if (!Icon) return null;

  return <Icon className={`h-5 w-5 ${ICON_COLORS[name]}`} />;
}