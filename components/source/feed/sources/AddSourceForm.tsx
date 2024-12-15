"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { validateSourceUrl } from "@/lib/utils/validation";

interface AddSourceFormProps {
  onAdd: (url: string, name: string) => void;
}

export function AddSourceForm({ onAdd }: AddSourceFormProps) {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    
    if (!url.trim() || !name.trim()) {
      setError("Both URL and name are required");
      return;
    }

    if (!validateSourceUrl(url)) {
      setError("Please enter a valid URL");
      return;
    }

    onAdd(url.trim(), name.trim());
    setUrl("");
    setName("");
  };

  return (
    <div className="space-y-4">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter source name"
      />
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter source URL"
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      <Button onClick={handleSubmit} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        Add Source
      </Button>
    </div>
  );
}