"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAVIGATION_STYLES } from "@/lib/styles/navigation";
import { LucideIcon } from "lucide-react";

interface NavigationItemProps {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  subItems?: Array<{
    id: string;
    label: string;
    href: string;
    icon: LucideIcon;
  }>;
}

export function NavigationItem({ id, label, icon: Icon, href, subItems }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(href + '/');

  return (
    <li className="mb-6 last:mb-0">
      <Link
        href={href}
        className={cn(
          NAVIGATION_STYLES.item.base,
          isActive ? NAVIGATION_STYLES.item.active : NAVIGATION_STYLES.item.inactive,
          isActive && NAVIGATION_STYLES.item.highlight
        )}
      >
        <div className={NAVIGATION_STYLES.icon.wrapper}>
          <Icon 
            className={cn(
              NAVIGATION_STYLES.icon.base,
              isActive ? NAVIGATION_STYLES.icon.active : NAVIGATION_STYLES.icon.default
            )}
          />
        </div>
        {label}
      </Link>
      
      {subItems && subItems.length > 0 && (
        <ul className={NAVIGATION_STYLES.subItem.wrapper}>
          {subItems.map((subItem) => {
            const isSubActive = pathname === subItem.href;
            const SubIcon = subItem.icon;
            return (
              <li key={subItem.id}>
                <Link
                  href={subItem.href}
                  className={cn(
                    NAVIGATION_STYLES.subItem.base,
                    isSubActive ? NAVIGATION_STYLES.subItem.active : NAVIGATION_STYLES.subItem.inactive
                  )}
                >
                  <div className={NAVIGATION_STYLES.subItem.connector} />
                  <SubIcon 
                    className={cn(
                      "h-4 w-4",
                      isSubActive ? "text-[#FF0000]" : "text-[#8A8A8E]"
                    )}
                  />
                  {subItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}