import { 
  Zap, 
  FileText, 
  Globe, 
  BarChart2, 
  Users, 
  Settings
} from "lucide-react";

export const navigationItems = [
  { 
    label: "Breaking", 
    icon: Zap, 
    isActive: true,
    subItems: [
      {
        label: "Updates",
        href: "/breaking/updates",
        isActive: false
      }
    ]
  },
  { 
    label: "Content", 
    icon: FileText, 
    isActive: false 
  },
  { 
    label: "Source", 
    icon: Globe, 
    isActive: false 
  },
  { 
    label: "Analytics", 
    icon: BarChart2, 
    isActive: false 
  },
  { 
    label: "Team", 
    icon: Users, 
    isActive: false 
  },
  { 
    label: "Automations", 
    icon: Settings, 
    isActive: false 
  }
] as const;