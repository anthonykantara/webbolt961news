export interface Activity {
  type: "article" | "notification" | "other";
  title: string;
  description: string;
  timestamp: Date;
  user?: {
    name: string;
    avatar: string;
  };
}