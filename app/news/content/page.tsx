"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContentPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/news/content/articles");
  }, [router]);
  
  return null;
}