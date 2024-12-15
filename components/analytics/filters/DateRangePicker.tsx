"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import type { DateRange } from "../types";

interface DateRangePickerProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
}

export function DateRangePicker({ value, onChange }: DateRangePickerProps) {
  return (
    <Button variant="outline" className="w-[240px]">
      <Calendar className="h-4 w-4 mr-2" />
      {value.from.toLocaleDateString()} - {value.to.toLocaleDateString()}
    </Button>
  );
}