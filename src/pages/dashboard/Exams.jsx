import React, { useState } from "react";
import ExamsTable from "@/components/dashboard/ExamsTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Exams() {
  const fakeExams = [
    {
      _id: "1",
      title: "Math Exam 2034",
      description: "Final exam covering algebra, geometry, and calculus.",
      classLevel: "Grade 1 Secondary",
      duration: 10,
      startDate: "2024-10-22T00:00:00.000Z",
      endDate: "2024-10-29T00:00:00.000Z",
      questions: [{ _id: "q1" }, { _id: "q2" }],
    },
    {
      _id: "2",
      title: "Math Exam 2035",
      description: "Same topics as previous",
      classLevel: "Grade 2 Secondary",
      duration: 10,
      startDate: "2024-10-22T00:00:00.000Z",
      endDate: "2024-10-29T00:00:00.000Z",
      questions: [],
    },
  ];

  const [selectedClassLevel, setSelectedClassLevel] = useState("all");

  const handleShow = (exam) => console.log("Show exam:", exam);
  const handleEdit = (exam) => console.log("Edit exam:", exam);
  const handleDelete = (id) => console.log("Delete exam:", id);

  const filteredExams =
    selectedClassLevel === "all"
      ? fakeExams
      : fakeExams.filter((exam) => exam.classLevel === selectedClassLevel);

  return (
    <div className="space-y-6">
      {/* Header and Add Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Exams</h1>
        <Button className="bg-primary text-white flex items-center gap-2">
          <Plus size={16} />
          Add New Exam
        </Button>
      </div>

      {/* Filter by class level */}
      <div className="w-[200px]">
        <Select value={selectedClassLevel} onValueChange={setSelectedClassLevel}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Grades</SelectItem>
            <SelectItem value="Grade 1 Secondary">Grade 1 Secondary</SelectItem>
            <SelectItem value="Grade 2 Secondary">Grade 2 Secondary</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <ExamsTable
        exams={filteredExams}
        onShow={handleShow}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
