import { useState } from "react";
import { Pencil, X } from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UpdateQuestionForm from "../UpdateQuestionForm";

export default function UpdateQuestionModal({ question, onUpdate }) {
  const [open, setOpen] = useState(false);

  const handleSuccess = (updatedQuestion) => {
    onUpdate?.(updatedQuestion);      // Update parent data
    setOpen(false);                   // Close modal after success
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Pencil size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Question</DialogTitle>
        </DialogHeader>

        <UpdateQuestionForm question={question} onSuccess={handleSuccess} />

      </DialogContent>
    </Dialog>
  );
}
