"use client";

import { useState } from "react";
import { useSettings } from "@/lib/hooks/useSettings";

export function useNewsActions() {
  const [isRunning, setIsRunning] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const { settings } = useSettings();

  const handleRun = async (content: string) => {
    if (!content.trim()) return;
    
    setIsRunning(true);
    try {
      // Run the content through the AI using the run prompt
      const runPrompt = settings.prompts.updates.run;
      
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate translations using the translation prompt
      const translationPrompt = settings.prompts.translation;
      
      // Simulate translation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Return mock translations
      return {
        translations: {
          ar: {
            title: "عنوان عربي",
            content: "محتوى عربي"
          },
          fr: {
            title: "Titre français",
            content: "Contenu français"
          }
        },
        suggestedLocation: {
          name: "Downtown Beirut",
          coordinates: {
            lat: 33.8938,
            lng: 35.5018
          }
        }
      };
    } catch (error) {
      console.error("Failed to run content:", error);
      throw error;
    } finally {
      setIsRunning(false);
    }
  };

  const handlePublish = async (data: any) => {
    setIsPublishing(true);
    try {
      // Simulate publishing to enabled channels
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Publishing to channels:", data);
    } catch (error) {
      console.error("Failed to publish:", error);
      throw error;
    } finally {
      setIsPublishing(false);
    }
  };

  return {
    isRunning,
    isPublishing,
    handleRun,
    handlePublish
  };
}