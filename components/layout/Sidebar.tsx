"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/styles";
import { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  Zap, 
  FileText, 
  Globe, 
  BarChart2, 
  Users, 
  Settings,
  Award,
  Newspaper,
  Video,
  Image,
  ChevronLeft
} from "lucide-react";
import { UserProfile } from "./sidebar/UserProfile";
import { Logo } from "./sidebar/Logo";

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
    collapsible: true,
    href: "/news/content",
    subItems: [
      {
        label: "Article",
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
    label: "Leaderboard",
    icon: Award,
    href: "/news/source/leaderboard"
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

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Auto-collapse sidebar when not on dashboard
  useEffect(() => {
    const shouldExpand = pathname === "/news/dashboard";
    setIsCollapsed(!shouldExpand);
  }, [pathname]);

  return (
    <aside className={cn(
      "border-r bg-white h-screen flex flex-col fixed left-0 top-0 z-30",
      "transition-[width] duration-300 ease-in-out",
      isCollapsed ? "w-[72px]" : "w-[220px]"
    )}>
      <style jsx global>{`
        :root {
          --sidebar-width: ${isCollapsed ? "72px" : "220px"};
        }
      `}</style>
      <div className={cn(
        "flex items-center transition-all duration-300",
        isCollapsed ? "px-4 py-6 justify-center" : "px-6 py-6"
      )}>
        <Logo isCollapsed={isCollapsed} />
      </div>
      
      <button
        onClick={() => setIsCollapsed(prev => !prev)}
        className={cn(
          "absolute top-6 -right-3 w-6 h-6 bg-white border rounded-full transition-opacity duration-300",
          "flex items-center justify-center shadow-sm",
          "hover:bg-gray-50 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-red-100",
          // pathname === "/news/dashboard" ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <ChevronLeft className={cn(
          "h-4 w-4 text-gray-400 transition-transform duration-300",
          isCollapsed && "rotate-180"
        )} />
      </button>

      <nav className="flex-1">
        <ul className={cn(
          "space-y-6 transition-all duration-300",
          isCollapsed ? "px-1" : "px-2"
        )}>
          {NAVIGATION_ITEMS.map((item) => {
            const key = item.href || item.label;
            const Icon = item.icon;
            const isActive = pathname === item.href || 
              (item.subItems?.some(sub => pathname.startsWith(sub.href)));

            return (
              <li key={key}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg transition-colors relative",
                      "text-sm font-medium",
                      isCollapsed ? "px-2 py-2 justify-center" : "px-3 py-2",
                      isActive 
                        ? "bg-red-50 text-red-600" 
                        : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className={cn(
                      "transition-opacity duration-300",
                      isCollapsed && "hidden"
                    )}>{item.label}</span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600">
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </div>
                )}
                
                {item.subItems && !isCollapsed && (
                  <ul className="ml-8 mt-2 space-y-1">
                    {item.subItems.map((subItem) => {
                      const isSubActive = pathname.startsWith(subItem.href);
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
      <div className={cn(
        "mt-auto border-t transition-opacity duration-300",
        isCollapsed && "px-2 py-4")}>
        <UserProfile isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
}