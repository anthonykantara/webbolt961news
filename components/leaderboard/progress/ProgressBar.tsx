"use client";

interface ProgressBarProps {
  value: number;
  maxValue: number;
  label: string;
}

export function ProgressBar({ value, maxValue, label }: ProgressBarProps) {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="space-y-1">
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#FF0000] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-sm font-medium text-right">{label}</div>
    </div>
  );
}