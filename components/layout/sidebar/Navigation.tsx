"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Zap, 
  FileText, 
  Globe, 
  BarChart2, 
  Users, 
  Settings,
  Video,
  Image,
  Newspaper
} from "lucide-react";

const NAVIGATION_ITEMS = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/news/dashboard"
  },
  {
    label: "Live Updates",
    icon: Zap,
    href: "/news/breaking",
    subItems: [
      {
        label: "Updates",
        href: "/news/breaking/updates",
        icon: Zap
      }
    ]
  },
  {
    label: "Content",
    icon: FileText,
    href: "/news/content",
    subItems: [
      {
        label: "Articles",
        href: "/news/content/articles",
        icon: Newspaper
      },
      {
        label: "Video",
        href: "/news/content/video",
        icon: Video
      },
      {
        label: "Media",
        href: "/news/content/media",
        icon: Image
      }
    ]
  },
  {
    label: "Source",
    icon: Globe,
    href: "/news/source"
  },
  {
    label: "Analytics",
    icon: BarChart2,
    href: "/news/analytics"
  },
  {
    label: "Team",
    icon: Users,
    href: "/news/team"
  },
  {
    label: "Automations",
    icon: Settings,
    href: "/news/automations"
  }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex-1">
      <ul className="space-y-1 px-2">
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || 
            (item.subItems?.some(sub => pathname === sub.href));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  "text-sm font-medium",
                  isActive 
                    ? "bg-red-50 text-red-600" 
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
              
              {item.subItems && (
                <ul className="ml-8 mt-1 space-y-1">
                  {item.subItems.map((subItem) => {
                    const isSubActive = pathname === subItem.href;
                    const SubIcon = subItem.icon;
                    
                    return (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors",
                            isSubActive
                              ? "text-red-600 bg-red-50"
                              : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                          )}
                        >
                          <SubIcon className="h-4 w-4" />
                          {subItem.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}