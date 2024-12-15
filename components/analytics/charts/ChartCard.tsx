"use client";

import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
}

export function ChartCard({ title, children }: ChartCardProps) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-4">{title}</h3>
      {children}
    </Card>
  );
}