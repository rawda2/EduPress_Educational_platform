import React, { useState } from "react";
import QuestionsTable from "@/components/dashboard/QuestionsTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Questions() {
  // All questions (each contains exam title for filtering)
  const [questions, setQuestions] = useState([
    {
      _id: "671a78743fa556fe79e8abce",
      text: "What is 5 multiplied by 5?",
      type: "multiple-choice",
      options: ["200", "350", "250", "25"],
      correctAnswer: "25",
      points: 2,
      exam: { _id: "1", title: "Math Exam 2034" },
    },
    {
      _id: "671a78873fa556fe79e8abd4",
      text: "What is 5 multiplied by 50?",
      type: "multiple-choice",
      options: ["200", "350", "250", "25"],
      correctAnswer: "250",
      points: 2,
      exam: { _id: "2", title: "Math Exam 2035" },
    },
  ]);

  const [selectedExam, setSelectedExam] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  // Handlers
  const handleShow = (q) => alert("Showing: " + q.text);
  const handleEdit = (q) => alert("Editing: " + q.text);
  const handleDelete = (id) => {
    setQuestions((prev) => prev.filter((q) => q._id !== id));
  };

  // Filter questions based on selected exam and type
  const filteredQuestions = questions.filter((q) => {
    const matchesExam = selectedExam === "all" || q.exam?.title === selectedExam;
    const matchesType = selectedType === "all" || q.type === selectedType;
    return matchesExam && matchesType;
  });

  // Get unique exam titles and question types for filter options
  const uniqueExams = [...new Set(questions.map((q) => q.exam?.title))];
  const uniqueTypes = [...new Set(questions.map((q) => q.type))];

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Questions</h1>
        <Button className="bg-primary text-white flex items-center gap-2">
          <Plus size={16} /> Add New Question
        </Button>
      </div>

      {/* Filters Section */}
      <div className="flex gap-4">
        {/* Filter by Exam */}
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

        {/* Filter by Type */}
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

      {/* Table of Filtered Questions */}
      <QuestionsTable
        questions={filteredQuestions}
        onShow={handleShow}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
