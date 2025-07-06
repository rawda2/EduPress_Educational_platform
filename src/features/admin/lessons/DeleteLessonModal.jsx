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
import { useDeleteLesson } from "@/features/lesson/useDeleteLesson";

export default function DeleteLessonModal({ lessonId }) {
  const { mutate: deleteLesson, isPending: isDeleting } = useDeleteLesson();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          <Trash size={16} className="text-destructive" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Lesson</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this lesson? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <LoadingButton
            loading={isDeleting}
            variant="destructive"
            onClick={() => deleteLesson(lessonId)}
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
