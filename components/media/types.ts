export type MediaType = "image" | "video" | "document" | "all";

export interface MediaItem {
  id: string;
  filename: string;
  altText: string;
  type: MediaType;
  size: number;
  dimensions?: {
    width: number;
    height: number;
  };
  url: string;
  uploadedAt: Date;
  folder: string;
  usedIn: Array<{
    id: string;
    title: string;
    type: "article" | "update";
    url: string;
  }>;
}

export interface MediaFolder {
  id: string;
  name: string;
  path: string;
  size: number;
  itemCount: number;
  subfolders?: MediaFolder[];
}

export interface MediaStats {
  totalSize: number;
  totalItems: number;
  unassignedItems: number;
  byType: Record<MediaType, number>;
}