export type ArticleStatus = "draft" | "review" | "published";

export type BlockType = "text" | "list" | "image" | "embed";

export interface Block {
  id: string;
  type: BlockType;
  content: string;
}

export type BlockType = "text" | "list" | "image" | "embed";

export interface Block {
  id: string;
  type: BlockType;
  content: string;
}

export interface Language {
  code: string;
  name: string;
  direction: "ltr" | "rtl";
}

export interface DetectedLanguage {
  code: string;
  name: string;
  confidence: number;
}

export interface TimeTrackingData {
  writing: number;
  editing: number;
  total: number;
}

export interface ArticleContent {
  headline: string;
  blocks: Block[];
  seoKeyword?: string;
}

export interface Article {
  id: string;
  content: ArticleContent;
  status: ArticleStatus;
  authors: string[];
  timeTracking: TimeTrackingData;
  createdAt: Date;
  updatedAt: Date;
}