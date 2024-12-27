"use client";

import { useState } from "react";

export function useSchedule(initialDate?: Date | null) {
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduledDate, setScheduledDate] = useState<Date | null>(initialDate || null);

  const toggleSchedule = () => {
    setIsScheduled(prev => !prev);
    if (!isScheduled && !scheduledDate) {
      // Set default time to next hour when enabling schedule
      const date = new Date();
      date.setHours(date.getHours() + 1, 0, 0, 0);
      setScheduledDate(date);
    }
  };

  const updateScheduledDate = (date: Date | null) => {
    setScheduledDate(date);
    if (date && !isScheduled) {
      setIsScheduled(true);
    }
  };

  return {
    isScheduled,
    scheduledDate,
    toggleSchedule,
    updateScheduledDate
  };
}