import React, { useState } from "react";
import ExamsTable from "@/features/admin/ExamsTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useExams } from "@/hooks/admin/useExams";

export default function Exams() {
  const { data, isLoading, isError } = useExams();
  const [selectedClassLevel, setSelectedClassLevel] = useState("all");

const exams = data || [];

  const filteredExams =
    selectedClassLevel === "all"
      ? exams
      : exams.filter((exam) => exam.classLevel === selectedClassLevel);

  const handleShow = (exam) => console.log("Show exam:", exam);
  const handleEdit = (exam) => console.log("Edit exam:", exam);
  const handleDelete = (id) => console.log("Delete exam:", id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Exams</h1>
        <Button className="bg-primary text-white flex items-center gap-2">
          <Plus size={16} />
          Add New Exam
        </Button>
      </div>

      {/* Filter */}
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
      {isLoading ? (
        <p className="text-muted-foreground">Loading exams...</p>
      ) : isError ? (
        <p className="text-destructive">Error loading exams</p>
      ) : filteredExams.length === 0 ? (
        <p className="text-muted-foreground">No exams found</p>
      ) : (
        <ExamsTable
          exams={filteredExams}
          onShow={handleShow}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
