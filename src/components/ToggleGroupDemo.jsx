import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupDemo({sections}) {
  return (
    <ToggleGroup type="single" className={"max-md:w-[100%] sticky top-0 z-10 bg-background border-b border-border"} defaultValue={sections[0].id} aria-label="Toggle sections">
      <div className="flex items-center justify-between gap-2 w-full">
        {sections.map((section) => (
          <ToggleGroupItem key={section.id} value={section.id} aria-label={`Toggle ${section.title}`}>
            <a href={`#${section.id}`} className="p-7 text-xl font-semibold">{section.title}</a>
          </ToggleGroupItem>
        ))}
      </div>
    </ToggleGroup>
  );
}
