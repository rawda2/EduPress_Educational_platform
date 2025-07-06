import { useState } from "react";
import { Loader2 } from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import QuestionsTable from "@/features/admin/QuestionsTable";
import AddQuestionModal from "@/features/admin/questions/AddQuestionModal";

import { useExams } from "@/hooks/admin/exams/useExams";
import { useQuestions } from "@/hooks/admin/questions/useQuestions";

export default function DashQuestions() {
  const { data: exams } = useExams();
  const { data, isLoading, isError } = useQuestions();

  const [selectedExam, setSelectedExam] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const examIdToTitle = {};
  (exams || []).forEach((exam) => {
    examIdToTitle[exam._id] = exam.title;
  });

  const questionsWithTitles = (data || []).map((q) => ({
    ...q,
    exam: {
      _id: q.exam,
      title: examIdToTitle[q.exam] || "Unknown Exam",
    },
  }));

  const filteredQuestions = questionsWithTitles.filter((q) => {
    const matchExam = selectedExam === "all" || q.exam?.title === selectedExam;
    const matchType = selectedType === "all" || q.type === selectedType;
    return matchExam && matchType;
  });

  const uniqueExams = [
    ...new Set(questionsWithTitles.map((q) => q.exam?.title)),
  ];
  const uniqueTypes = [...new Set(questionsWithTitles.map((q) => q.type))];

  return (
    <div className="space-y-6 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Questions</h1>
        <AddQuestionModal exams={exams} />
      </div>

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

      {isLoading ? (
        <Loader2 className="animate-spin size-8 mx-auto mt-20" />
      ) : isError ? (
        <p className="text-destructive">Error loading questions</p>
      ) : filteredQuestions.length === 0 ? (
        <p className="text-muted-foreground">No questions found</p>
      ) : (
        <QuestionsTable questions={filteredQuestions} />
      )}
    </div>
  );
}
