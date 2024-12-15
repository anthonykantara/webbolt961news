export type ViewPeriod = "daily" | "monthly" | "yearly";
export type ContentType = "all" | "articles" | "updates" | "videos";
export type StaffFilter = "all" | "editors" | "writers";

export interface FilterState {
  period: ViewPeriod;
  contentType: ContentType;
  staffFilter: StaffFilter;
}