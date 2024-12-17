export interface ImageConfig {
  mode: "single" | "dual";
  images: string[];
  alignment: "left" | "center" | "right";
}

export interface FeaturedImage {
  url: string;
  credit?: string;
  altText?: string;
  title?: string;
  type: "horizontal" | "vertical";
}