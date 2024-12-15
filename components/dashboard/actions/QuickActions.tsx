"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export function QuickActions() {
  const router = useRouter();

  const actions = [
    {
      label: "New Article",
      icon: FileText,
      href: "/news/content/articles/new",
      color: "bg-blue-500"
    },
    {
      label: "Live Update",
      icon: Zap,
      href: "/news/breaking/updates",
      color: "bg-red-500"
    }
  ];

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2"
              onClick={() => router.push(action.href)}
            >
              <div className={`p-2 rounded-lg ${action.color}`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm">{action.label}</span>
            </Button>
          );
        })}
      </div>
    </Card>
  );
}