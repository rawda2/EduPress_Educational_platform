import QuestionsTable from "@/features/admin/QuestionsTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useQuestions } from "@/hooks/admin/useQuestions";
import React, { useState} from "react";

export default function Questions() {
  const { data, isLoading, isError } = useQuestions();
  const [selectedExam, setSelectedExam] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // const questions = (data?.questions || []).map((q) => ({
  //   ...q,
  //   exam: {
  //     _id: q.exam,
  //     title: examIdToTitle[q.exam] || "Unknown Exam",
  //   },
  // }));
const questions = data || [];

  const filteredQuestions = questions.filter((q) => {
    const matchExam =
      selectedExam === "all" || q.exam?.title === selectedExam;
    const matchType = selectedType === "all" || q.type === selectedType;
    return matchExam && matchType;
  });

  const uniqueExams = [...new Set(questions.map((q) => q.exam?.title))];
  const uniqueTypes = [...new Set(questions.map((q) => q.type))];

  const handleShow = (q) => alert("Showing: " + q.text);
  const handleEdit = (q) => alert("Editing: " + q.text);
  const handleDelete = (id) => console.log("Delete question:", id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Questions</h1>
        <Button className="bg-primary text-white flex items-center gap-2">
          <Plus size={16} />
          Add New Question
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="w-[200px]">
          <Select value={selectedExam} onValueChange={setSelectedExam}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Exam" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Exams</SelectItem>
              {uniqueExams.map((title) => (
                <SelectItem key={title} value={title}>
                  {title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-[200px]">
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {uniqueTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table or loading/error */}
      {isLoading ? (
        <p className="text-muted-foreground">Loading questions...</p>
      ) : isError ? (
        <p className="text-destructive">Error loading questions</p>
      ) : filteredQuestions.length === 0 ? (
        <p className="text-muted-foreground">No questions found</p>
      ) : (
        <QuestionsTable
          questions={filteredQuestions}
          onShow={handleShow}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
