"use client";

import { useState, useEffect } from "react";
import type { FeaturedImage } from "@/lib/types/featured";

export function useFeaturedImage(seoKeyword: string) {
  const [featuredImage, setFeaturedImage] = useState<FeaturedImage | null>(null);

  // Update image metadata when SEO keyword changes
  useEffect(() => {
    if (featuredImage && seoKeyword) {
      setFeaturedImage(prev => {
        if (!prev) return null;
        return {
          ...prev,
          altText: `${seoKeyword} - ${prev.altText?.split(" - ")[1] || ""}`.trim(),
          title: `${seoKeyword} - ${prev.title?.split(" - ")[1] || ""}`.trim()
        };
      });
    }
  }, [seoKeyword]);

  const updateFeaturedImage = (image: FeaturedImage) => {
    setFeaturedImage({
      ...image,
      altText: seoKeyword ? `${seoKeyword} - ${image.altText || ""}`.trim() : image.altText,
      title: seoKeyword ? `${seoKeyword} - ${image.title || ""}`.trim() : image.title
    });
  };

  return {
    featuredImage,
    updateFeaturedImage
  };
}