"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronsUpDown } from "lucide-react";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

const MOCK_AUTHORS = [
  { id: "1", name: "John Smith" },
  { id: "2", name: "Sarah Johnson" },
  { id: "3", name: "Mike Wilson" }
];

interface AuthorSelectorProps {
  value: string[];
  onChange: (journalists: string[]) => void;
}

export function AuthorSelector({ value, onChange }: AuthorSelectorProps) {
  const [open, setOpen] = useState(false);
  const { user } = useCurrentUser();

  useEffect(() => {
    // Auto-assign current user as journalist if no journalists are selected
    if (value.length === 0 && user) {
      onChange([user.id]);
    }
  }, [user, value, onChange]);

  const removeJournalist = (journalistId: string) => {
    onChange(value.filter(id => id !== journalistId));
  };

  const addJournalist = (journalistId: string) => {
    if (!value.includes(journalistId)) {
      onChange([...value, journalistId]);
    }
  };

  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-3">Journalist</h3>
      <div className="space-y-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              Add another journalist...
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search for a journalist..." />
              <CommandEmpty>No journalist found.</CommandEmpty>
              <CommandGroup>
                {MOCK_AUTHORS.map((author) => (
                  <CommandItem
                    key={author.id}
                    onSelect={() => addJournalist(author.id)}
                  >
                    {author.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <div className="flex flex-wrap gap-2">
          {value.map(authorId => {
            const author = MOCK_AUTHORS.find(a => a.id === authorId);
            if (!author) return null;
            return (
              <Badge
                key={author.id}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {author.name}
                <button
                  onClick={() => removeJournalist(author.id)}
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove</span>
                </button>
              </Badge>
            );
          })}
        </div>
      </div>
    </Card>
  );
}