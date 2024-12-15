"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserTipsPanel } from "./panels/UserTipsPanel";
import { WebsitePanel } from "./panels/WebsitePanel";
import { XPanel } from "./panels/XPanel";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "user-tips", label: "User Tips" },
  { id: "websites", label: "Websites" },
  { id: "x", label: "X" },
  { id: "telegram", label: "Telegram" },
  { id: "whatsapp", label: "WhatsApp" }
] as const;

type TabId = typeof TABS[number]["id"];

export function SourceMonitoringDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("user-tips");

  return (
    <div className="p-6">
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabId)} className="space-y-6">
        <TabsList className="bg-white border-b rounded-none w-full justify-start h-12 p-0">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={cn(
                "flex-1 max-w-[200px] h-12 rounded-none border-b-2 border-transparent",
                "data-[state=active]:border-[#FF0000] data-[state=active]:text-[#FF0000]"
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="user-tips" className="m-0">
          <UserTipsPanel />
        </TabsContent>

        <TabsContent value="websites" className="m-0">
          <WebsitePanel />
        </TabsContent>

        <TabsContent value="x" className="m-0">
          <XPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}