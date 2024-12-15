export type TriggerType = 'event' | 'schedule';

export interface Automation {
  id: string;
  name: string;
  type: TriggerType;
  status: 'active' | 'paused';
  configuration: EventConfig | ScheduleConfig;
  lastRun?: Date;
  nextRun?: Date;
  lastStatus?: 'success' | 'failure';
  createdAt: Date;
}

export interface EventConfig {
  type: 'event';
  sources: string[];
  keywords: string[];
  hashtags: string[];
  action: string;
  targetPlatform: string;
}

export interface ScheduleConfig {
  type: 'schedule';
  frequency: 'daily' | 'weekly' | 'monthly';
  time: string;
  timezone: string;
  action: string;
  targetPlatform: string;
}

export type SortField = 'status' | 'type' | 'createdAt' | 'lastRun';