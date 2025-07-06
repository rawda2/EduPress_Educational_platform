import { Trash } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";

import { useDeleteQuestion } from "@/hooks/admin/questions/UseDeleteQuestion";

export default function DeleteQuestionModal({ questionId }) {
  const { mutate: deleteQuestion, isPending: isDeleting } = useDeleteQuestion();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          <Trash size={16} className="text-destructive" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Question</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this exam? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <LoadingButton
            variant="destructive"
            loading={isDeleting}
            onClick={() => deleteQuestion(questionId)}
          >
            Yes, Delete it!
          </LoadingButton>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
