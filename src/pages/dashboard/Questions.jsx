import React, { useState, useEffect } from "react";
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
import { fetchQuestionsAPI } from "@/features/questions/fetchQuestionsAPI";

// ❗ مؤقتًا: Map بين examId والعنوان
const examIdToTitle = {
  "671a785c3fa556fe79e8abc9": "Math Exam 2034",
  // ضيفي هنا أي امتحانات تانية
};

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedExam, setSelectedExam] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    async function getData() {
      const result = await fetchQuestionsAPI();
      if (result.success) {
        const formattedQuestions = result.questions.map((q) => ({
          ...q,
          exam: {
            _id: q.exam,
            title: examIdToTitle[q.exam] || "Unknown Exam",
          },
        }));
        setQuestions(formattedQuestions);
      } else {
        console.error(result.message);
      }
      setLoading(false);
    }

    getData();
  }, []);

  const handleShow = (q) => alert("Showing: " + q.text);
  const handleEdit = (q) => alert("Editing: " + q.text);
  const handleDelete = (id) => {
    setQuestions((prev) => prev.filter((q) => q._id !== id));
  };

  const filteredQuestions = questions.filter((q) => {
    const matchesExam =
      selectedExam === "all" || q.exam?.title === selectedExam;
    const matchesType = selectedType === "all" || q.type === selectedType;
    return matchesExam && matchesType;
  });

  const uniqueExams = [...new Set(questions.map((q) => q.exam?.title))];
  const uniqueTypes = [...new Set(questions.map((q) => q.type))];

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

      {/* Table */}
      {loading ? (
        <p className="text-muted-foreground">Loading questions...</p>
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
