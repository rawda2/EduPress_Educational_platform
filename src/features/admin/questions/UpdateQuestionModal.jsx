import { Pencil } from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UpdateQuestionForm from "../UpdateQuestionForm";

export default function UpdateQuestionModal({ question }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Pencil size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Question</DialogTitle>
        </DialogHeader>
        <UpdateQuestionForm question={question} />
      </DialogContent>
    </Dialog>
  );
}
