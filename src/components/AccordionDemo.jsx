import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@radix-ui/react-label";
import { Lock, VideoIcon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export function AccordionDemo({ title ,disabled}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full p-2 rounded-lg border shadow-md"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-3">
              <Checkbox id="toggle" className="mt-1" disabled={disabled} />
              <Label htmlFor="toggle">Lesson 1</Label>
            </div>
            {disabled ? <Lock /> : <VideoIcon />}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
