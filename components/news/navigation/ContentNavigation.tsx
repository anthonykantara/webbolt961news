"use client";

import { navigationItems } from "@/components/layout/sidebar/config";
import { cn } from "@/lib/utils";

export function ContentNavigation() {
  return (
    <nav className="h-[84px] px-6 bg-white border-b border-[#E4E4E7] flex items-center">
      <ul className="flex items-center gap-8">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <button
                type="button"
                className={cn(
                  "flex items-center gap-3 text-[18px] font-semibold transition-colors duration-200",
                  item.isActive ? "text-[#FF0000]" : "text-[#0E121B]"
                )}
              >
                <Icon 
                  className={cn(
                    "h-5 w-5",
                    item.isActive ? "text-[#FF0000]" : "text-[#8A8A8E]"
                  )}
                />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}