import { Eye } from "lucide-react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ExamScoresTable from "./ExamScoresTable";

export default function ViewExamScoresModel({ examId }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <Eye size={16} />
          View Scores
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Students' Scores</DialogTitle>
        </DialogHeader>
        <ExamScoresTable examId={examId} />
      </DialogContent>
    </Dialog>
  );
}
