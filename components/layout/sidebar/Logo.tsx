"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/styles";

interface LogoProps {
  isCollapsed?: boolean;
}

export function Logo({ isCollapsed = false }: LogoProps) {
  return (
    <div className={cn(
      "transition-all duration-300",
      isCollapsed ? "w-10" : "w-[140px]"
    )}>
      <Image
        src="/961-news-logo.png"
        alt="961 News"
        width={isCollapsed ? 40 : 140}
        height={isCollapsed ? 40 : 40}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}