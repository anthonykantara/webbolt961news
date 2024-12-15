"use client";

import { formatDistanceToNow } from "date-fns";

export function getTimeAgo(date: Date, addSuffix = true): string {
  return formatDistanceToNow(date, { addSuffix });
}