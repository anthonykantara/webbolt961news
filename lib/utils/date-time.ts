import { format } from "date-fns";

export function formatDateTime(date: Date): string {
  return format(date, "PPP 'at' p");
}

export function formatDateOnly(date: Date): string {
  return format(date, "MMMM d, yyyy");
}

export function formatTimeOnly(date: Date): string {
  return format(date, "HH:mm");
}

export function isInPast(date: Date): boolean {
  return date < new Date();
}

export function getNextHour(): Date {
  const date = new Date();
  date.setHours(date.getHours() + 1, 0, 0, 0);
  return date;
}

export function isValidScheduleDate(date: Date): boolean {
  const now = new Date();
  const minDate = new Date(now);
  minDate.setHours(0, 0, 0, 0);
  return date >= minDate;
}

export function isPastDay(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}