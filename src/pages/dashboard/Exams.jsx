import React, { useEffect, useState } from "react";
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
import { fetchExamsAPI } from "@/features/exams/fetchExamsAPI";

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [selectedClassLevel, setSelectedClassLevel] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExams() {
      const result = await fetchExamsAPI();
      if (result.success) {
        setExams(result.exams);
      } else {
        console.error(result.message);
      }
      setLoading(false);
    }

    fetchExams();
  }, []);

  const handleShow = (exam) => console.log("Show exam:", exam);
  const handleEdit = (exam) => console.log("Edit exam:", exam);
  const handleDelete = (id) => console.log("Delete exam:", id);

  const filteredExams =
    selectedClassLevel === "all"
      ? exams
      : exams.filter((exam) => exam.classLevel === selectedClassLevel);

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
      {loading ? (
        <p className="text-muted-foreground">Loading exams...</p>
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
