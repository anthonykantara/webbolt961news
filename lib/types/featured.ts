export interface ImageConfig {
  mode: "single" | "dual";
  images: string[];
  alignment: "left" | "center" | "right";
}

export interface FeaturedImage {
  url: string;
  credit?: string;
  type: "horizontal" | "vertical";
}