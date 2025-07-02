// src/features/admin/QuickActions.jsx
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default" className="flex gap-2">
        <PlusCircle size={16} />
        Add User
      </Button>
      <Button variant="secondary" className="flex gap-2">
        <PlusCircle size={16} />
        Add Lesson
      </Button>
      <Button variant="secondary" className="flex gap-2">
        <PlusCircle size={16} />
        Add Exam
      </Button>
    </div>
  );
}
