import { Eye } from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ViewLessonDetails from "../ViewLessonDetails";

export default function ViewLessonModal({ lesson }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          <Eye size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>View Lesson</DialogTitle>
        </DialogHeader>
        <ViewLessonDetails lesson={lesson} />
      </DialogContent>
    </Dialog>
  );
}
