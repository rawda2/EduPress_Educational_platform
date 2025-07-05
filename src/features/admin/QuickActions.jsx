// src/features/admin/QuickActions.jsx
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function QuickActions({ onAddLesson, onAddExam, onAddQuestion }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={onAddLesson} variant="default" className="flex gap-2">
        <PlusCircle size={16} />
        Add Lesson
      </Button>
      <Button onClick={onAddExam} variant="secondary" className="flex gap-2">
        <PlusCircle size={16} />
        Add Exam
      </Button>
      <Button onClick={onAddQuestion} variant="secondary" className="flex gap-2">
        <PlusCircle size={16} />
        Add Question
      </Button>
    </div>
  );
}

