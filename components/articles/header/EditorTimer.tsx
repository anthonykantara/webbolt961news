"use client";

interface EditorTimerProps {
  time: string;
}

export function EditorTimer({ time }: EditorTimerProps) {
  return (
    <div className="font-mono text-2xl font-medium text-gray-700" aria-label="Elapsed time">
      {time}
    </div>
  );
}