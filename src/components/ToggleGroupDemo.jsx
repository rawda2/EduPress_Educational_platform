import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single">
      <div className="flex items-center justify-between gap-2 w-full">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <h1 className="p-4">Description</h1>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <h1>Instructor</h1>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <h1>Syllabus</h1>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <h1>Reviews</h1>
        </ToggleGroupItem>
      </div>
    </ToggleGroup>
  );
}
