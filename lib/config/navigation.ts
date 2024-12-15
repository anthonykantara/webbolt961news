import { 
  LayoutDashboard, 
  Zap, 
  FileText, 
  Globe, 
  BarChart2, 
  Users, 
  Settings 
} from 'lucide-react';

export const NAVIGATION_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/news/dashboard'
  },
  {
    id: 'breaking',
    label: 'Breaking',
    icon: Zap,
    href: '/news/breaking',
    subItems: [
      {
        id: 'updates',
        label: 'Updates',
        href: '/news/breaking/updates',
        icon: FileText
      }
    ]
  },
  {
    id: 'content',
    label: 'Content',
    icon: FileText,
    href: '/news/content'
  },
  {
    id: 'source',
    label: 'Source',
    icon: Globe,
    href: '/news/source'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart2,
    href: '/news/analytics'
  },
  {
    id: 'team',
    label: 'Team',
    icon: Users,
    href: '/news/team'
  },
  {
    id: 'automations',
    label: 'Automations',
    icon: Settings,
    href: '/news/automations'
  }
] as const;