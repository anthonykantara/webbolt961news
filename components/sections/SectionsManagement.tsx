"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionsHeader } from "./header/SectionsHeader";
import { SectionsList } from "./list/SectionsList";
import { TopicsList } from "./list/TopicsList";
import { AddSectionDialog } from "./dialogs/AddSectionDialog";
import { AddTopicDialog } from "./dialogs/AddTopicDialog";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Section, Topic } from "@/lib/types/sections";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

export function SectionsManagement() {
  const [isAddingSectionOpen, setIsAddingSectionOpen] = useState(false);
  const [isAddingTopicOpen, setIsAddingTopicOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [editingTopic, setEditingTopic] = useState<Topic | null>(null);
  const [deletingSectionId, setDeletingSectionId] = useState<string | null>(null);
  const [deletingTopicId, setDeletingTopicId] = useState<string | null>(null);
  const [sections, setSections] = useState<Section[]>([
    {
      id: "1",
      name: "News",
      translations: {
        ar: "أخبار",
        fr: "Actualités"
      },
      seo: {
        title: "Latest News and Updates",
        description: "Stay informed with the latest news and updates from around the region.",
        keywords: ["news", "updates", "current events"]
      }
    }
  ]);
  
  const [topics, setTopics] = useState<Topic[]>([
    {
      id: "1",
      name: "Politics",
      translations: {
        ar: "سياسة",
        fr: "Politique"
      },
      seo: {
        title: "Political News and Analysis",
        description: "In-depth coverage of political developments and analysis.",
        keywords: ["politics", "government", "policy"]
      }
    }
  ]);

  const handleDeleteSection = (id: string) => {
    setSections(prev => prev.filter(section => section.id !== id));
  };

  const handleDeleteTopic = (id: string) => {
    setTopics(prev => prev.filter(topic => topic.id !== id));
  };

  const handleEditSection = (section: Section) => {
    setSections(prev => prev.map(s => s.id === section.id ? section : s));
    setEditingSection(null);
  };

  const handleEditTopic = (topic: Topic) => {
    setTopics(prev => prev.map(t => t.id === topic.id ? topic : t));
    setEditingTopic(null);
  };

  return (
    <div className="p-6">
      <SectionsHeader 
        onAddSection={() => setIsAddingSectionOpen(true)}
        onAddTopic={() => setIsAddingTopicOpen(true)}
      />

      <Card className="mt-6">
        <Tabs defaultValue="sections" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-12 p-0">
            <TabsTrigger 
              value="sections" 
              className={cn(
                "flex-1 max-w-[200px] h-12 rounded-none border-b-2 border-transparent",
                "data-[state=active]:border-[#FF0000] data-[state=active]:text-[#FF0000]"
              )}
            >
              Sections
            </TabsTrigger>
            <TabsTrigger 
              value="topics" 
              className={cn(
                "flex-1 max-w-[200px] h-12 rounded-none border-b-2 border-transparent",
                "data-[state=active]:border-[#FF0000] data-[state=active]:text-[#FF0000]"
              )}
            >
              Topics
            </TabsTrigger>
          </TabsList>

          <div className="p-6">
            <TabsContent value="sections" className="m-0">
              <SectionsList 
                sections={sections}
                onEdit={setEditingSection}
                onDelete={setDeletingSectionId}
              />
            </TabsContent>

            <TabsContent value="topics" className="m-0">
              <TopicsList 
                topics={topics}
                onEdit={setEditingTopic}
                onDelete={setDeletingTopicId}
              />
            </TabsContent>
          </div>
        </Tabs>
      </Card>

      {/* Section Dialogs */}
      <AddSectionDialog
        open={isAddingSectionOpen}
        onOpenChange={setIsAddingSectionOpen}
        onAdd={(section) => {
          setSections(prev => [...prev, section]);
          setIsAddingSectionOpen(false);
        }}
        section={editingSection}
      />

      {/* Topic Dialogs */}
      <AddTopicDialog
        open={isAddingTopicOpen}
        onOpenChange={setIsAddingTopicOpen}
        onAdd={(topic) => {
          setTopics(prev => [...prev, topic]);
          setIsAddingTopicOpen(false);
        }}
        topic={editingTopic}
      />

      {/* Delete Confirmation Dialogs */}
      <AlertDialog open={!!deletingSectionId} onOpenChange={() => setDeletingSectionId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Section</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this section? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (deletingSectionId) handleDeleteSection(deletingSectionId);
                setDeletingSectionId(null);
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!deletingTopicId} onOpenChange={() => setDeletingTopicId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Topic</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this topic? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (deletingTopicId) handleDeleteTopic(deletingTopicId);
                setDeletingTopicId(null);
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}