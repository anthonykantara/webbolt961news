"use client";

import { EditorBlock } from "./EditorBlock";
import { AddBlockButton } from "./AddBlockButton";
import type { Block } from "@/lib/types/article";

interface BlockListProps {
  blocks: Block[];
  selectedBlockId: string | null;
  onBlockSelect: (id: string) => void;
  onBlockChange: (id: string, content: string) => void;
  onBlockDelete: (id: string) => void;
  onBlockMove: (fromIndex: number, toIndex: number) => void;
}

export function BlockList({
  blocks,
  selectedBlockId,
  onBlockSelect,
  onBlockChange,
  onBlockDelete,
  onBlockMove
}: BlockListProps) {
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => (
        <div key={block.id} className="space-y-2">
          <EditorBlock
            block={block}
            index={index}
            isSelected={selectedBlockId === block.id}
            onSelect={() => onBlockSelect(block.id)}
            onChange={(content) => onBlockChange(block.id, content)}
            onDelete={() => onBlockDelete(block.id)}
            onMoveUp={() => onBlockMove(index, index - 1)}
            onMoveDown={() => onBlockMove(index, index + 1)}
          />
          
          {/* Add block button between blocks */}
          <AddBlockButton
            onAdd={(type) => onBlockMove(blocks.length, index + 1)}
            variant="minimal"
          />
        </div>
      ))}
    </div>
  );
}