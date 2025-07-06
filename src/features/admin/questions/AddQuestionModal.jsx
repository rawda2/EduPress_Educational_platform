import { PlusCircle } from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddQuestionForm from "./AddQuestionForm";

export default function AddQuestionModal({ exams }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="flex gap-2">
          <PlusCircle size={16} />
          Add Question
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Question</DialogTitle>
        </DialogHeader>
        <AddQuestionForm exams={exams} />
      </DialogContent>
    </Dialog>
  );
}
