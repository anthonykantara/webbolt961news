export interface ScheduleConfig {
  isScheduled: boolean;
  scheduledDate: Date | null;
}

export interface DateTimeConfig {
  date: Date | null;
  time: string;
}