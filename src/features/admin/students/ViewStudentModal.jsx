import { Eye } from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ViewStudentDetails from "../ViewStudentDetails";

export default function ViewStudentModal({ student }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Eye size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Question Details</DialogTitle>
        </DialogHeader>
        <ViewStudentDetails student={student} />
      </DialogContent>
    </Dialog>
  );
}
