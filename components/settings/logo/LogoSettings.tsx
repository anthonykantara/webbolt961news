"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import Image from "next/image";
import { FaviconUpload } from "./FaviconUpload";

export function LogoSettings() {
  const [dashboardLogo, setDashboardLogo] = useState<string | null>(null);
  const [frontendLogo, setFrontendLogo] = useState<string | null>(null);
  const [favicon, setFavicon] = useState<string | null>(null);

  const handleLogoUpload = (file: File, type: "dashboard" | "frontend") => {
    const url = URL.createObjectURL(file);
    if (type === "dashboard") {
      setDashboardLogo(url);
    } else {
      setFrontendLogo(url);
    }
  };

  const handleRemoveLogo = (type: "dashboard" | "frontend") => {
    if (type === "dashboard") {
      setDashboardLogo(null);
    } else {
      setFrontendLogo(null);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Dashboard Logo</h2>
        <div className="space-y-4">
          {dashboardLogo ? (
            <div className="relative w-[200px]">
              <Image
                src={dashboardLogo}
                alt="Dashboard Logo"
                width={200}
                height={60}
                className="rounded-lg border"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white shadow-md hover:bg-gray-100"
                onClick={() => handleRemoveLogo("dashboard")}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div
              className={cn(
                "w-[200px] h-[60px] rounded-lg border-2 border-dashed",
                "flex flex-col items-center justify-center gap-2",
                "cursor-pointer hover:bg-gray-50 transition-colors"
              )}
              onClick={() => document.getElementById("dashboard-logo")?.click()}
            >
              <Upload className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500">Upload logo</span>
            </div>
          )}
          <input
            id="dashboard-logo"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleLogoUpload(file, "dashboard");
            }}
          />
          <p className="text-sm text-gray-500">
            Recommended size: 200x60px (PNG or SVG)
          </p>
        </div>
      </div>

      <div className="space-y-6 pt-8 border-t">
        <h2 className="text-lg font-semibold">Frontend Logo</h2>
        <div className="space-y-4">
          {frontendLogo ? (
            <div className="relative w-[200px]">
              <Image
                src={frontendLogo}
                alt="Frontend Logo"
                width={200}
                height={60}
                className="rounded-lg border"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white shadow-md hover:bg-gray-100"
                onClick={() => handleRemoveLogo("frontend")}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div
              className={cn(
                "w-[200px] h-[60px] rounded-lg border-2 border-dashed",
                "flex flex-col items-center justify-center gap-2",
                "cursor-pointer hover:bg-gray-50 transition-colors"
              )}
              onClick={() => document.getElementById("frontend-logo")?.click()}
            >
              <Upload className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500">Upload logo</span>
            </div>
          )}
          <input
            id="frontend-logo"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleLogoUpload(file, "frontend");
            }}
          />
          <p className="text-sm text-gray-500">
            Recommended size: 200x60px (PNG or SVG)
          </p>
        </div>
      </div>
      
      <div className="space-y-6 pt-8 border-t">
        <h2 className="text-lg font-semibold">Favicon</h2>
        <FaviconUpload
          favicon={favicon}
          onFaviconChange={setFavicon}
        />
      </div>
    </div>
  );
}