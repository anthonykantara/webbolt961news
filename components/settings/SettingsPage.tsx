"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogoSettings } from "./logo/LogoSettings";
import { LanguageSettings } from "./language/LanguageSettings";
import { PromptsSettings } from "./prompts/PromptsSettings";
import { SectionsManagement } from "@/components/sections/SectionsManagement";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils/styles";

export function SettingsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
      
      <Card>
        <Tabs defaultValue="logo" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-12 p-0">
            <TabsTrigger value="logo" className={cn(
              "flex-1 max-w-[200px] h-12 rounded-none border-b-2 border-transparent",
              "data-[state=active]:border-[#FF0000] data-[state=active]:text-[#FF0000]"
            )}>
              Logo
            </TabsTrigger>
            <TabsTrigger value="languages" className={cn(
              "flex-1 max-w-[200px] h-12 rounded-none border-b-2 border-transparent",
              "data-[state=active]:border-[#FF0000] data-[state=active]:text-[#FF0000]"
            )}>
              Languages
            </TabsTrigger>
            <TabsTrigger value="sections" className={cn(
              "flex-1 max-w-[200px] h-12 rounded-none border-b-2 border-transparent",
              "data-[state=active]:border-[#FF0000] data-[state=active]:text-[#FF0000]"
            )}>
              Sections
            </TabsTrigger>
            <TabsTrigger value="prompts" className={cn(
              "flex-1 max-w-[200px] h-12 rounded-none border-b-2 border-transparent",
              "data-[state=active]:border-[#FF0000] data-[state=active]:text-[#FF0000]"
            )}>
              Prompts
            </TabsTrigger>
          </TabsList>

          <div className="p-6">
            <TabsContent value="logo" className="m-0">
              <LogoSettings />
            </TabsContent>

            <TabsContent value="languages" className="m-0">
              <LanguageSettings />
            </TabsContent>
            <TabsContent value="sections" className="m-0">
              <SectionsManagement />
            </TabsContent>
            <TabsContent value="prompts" className="m-0">
              <PromptsSettings />
            </TabsContent>
          </div>
        </Tabs>
      </Card>
    </div>
  );
}