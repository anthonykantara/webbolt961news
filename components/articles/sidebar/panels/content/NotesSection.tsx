"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils/styles";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

interface Note {
  id: string;
  content: string;
  createdAt: Date;
  author: {
    id: string;
    name: string;
    username: string;
  };
}

export function NotesSection() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");
  const { user } = useCurrentUser();

  const addNote = () => {
    if (!newNote.trim() || !user) return;
    
    const note: Note = {
      id: crypto.randomUUID(),
      content: newNote.trim(),
      createdAt: new Date(),
      author: {
        id: user.id,
        name: user.name,
        username: user.username
      }
    };
    
    setNotes(prev => [note, ...prev]);
    setNewNote("");
  };

  const removeNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium mb-3">Notes</h3>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <Textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add a note..."
            className="min-h-[80px] resize-none"
          />
          <Button
            onClick={addNote}
            disabled={!newNote.trim()}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Note
          </Button>
        </div>

        <div className="space-y-3">
          {notes.map((note) => (
            <div
              key={note.id}
              className={cn(
                "relative p-3 rounded-lg bg-gray-50",
                "group hover:bg-gray-100 transition-colors"
              )}
            >
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "absolute top-2 right-2 h-6 w-6",
                  "opacity-0 group-hover:opacity-100",
                  "text-gray-400 hover:text-red-600 hover:bg-red-50"
                )}
                onClick={() => removeNote(note.id)}
              >
                <X className="h-3 w-3" />
              </Button>

              <div className="flex items-start gap-3">
                <Avatar className="h-6 w-6">
                  <AvatarImage 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${note.author.username}`}
                    alt={note.author.name} 
                  />
                  <AvatarFallback>{note.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{note.author.name}</span>
                    <span className="text-xs text-gray-500">
                      {note.createdAt.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm whitespace-pre-wrap pr-6">{note.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}