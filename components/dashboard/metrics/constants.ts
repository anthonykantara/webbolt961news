import { Eye, Users, DollarSign, Share2, MessageSquare, Heart } from "lucide-react";
import type { Metric } from "./types";

export const METRICS: Metric[] = [
  {
    label: "Views",
    value: "34,999",
    change: 20,
    trend: "up",
    icon: {
      Icon: Eye,
      color: "text-purple-500"
    }
  },
  {
    label: "Active Users",
    value: "12,543",
    change: 15,
    trend: "up",
    icon: {
      Icon: Users,
      color: "text-green-500"
    }
  },
  {
    label: "Revenue",
    value: "$15,420",
    change: 25,
    trend: "up",
    icon: {
      Icon: DollarSign,
      color: "text-blue-500"
    }
  },
  {
    label: "Total Shares",
    value: "8,976",
    change: 8,
    trend: "up",
    icon: {
      Icon: Share2,
      color: "text-orange-500"
    }
  },
  {
    label: "Comments",
    value: "5,432",
    change: 12,
    trend: "up",
    icon: {
      Icon: MessageSquare,
      color: "text-pink-500"
    }
  },
  {
    label: "Reactions",
    value: "28,976",
    change: 18,
    trend: "up",
    icon: {
      Icon: Heart,
      color: "text-red-500"
    }
  }
];