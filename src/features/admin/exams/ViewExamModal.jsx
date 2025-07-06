import { Eye } from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ViewExamDetails from "../ViewExamDetails";

export default function ViewExamModal({ exam }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          <Eye size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Exam</DialogTitle>
        </DialogHeader>
        <ViewExamDetails exam={exam} />
      </DialogContent>
    </Dialog>
  );
}
