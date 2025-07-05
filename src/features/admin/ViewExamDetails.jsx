import React, { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import AddQuestionForm from "@/features/admin/AddQuestionForm";
import { Button } from "@/components/ui/button";
import { X, Plus, Eye } from "lucide-react";
import { useExamScores } from "@/hooks/admin/exams/useExamScores";

export default function ViewExamDetails({ exam }) {
  const [showForm, setShowForm] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const modalRef = useRef(null);

  const handleQuestionSubmit = (formData) => {
    console.log("New Question Submitted:", formData);
    setShowForm(false);
  };

  const { data, isLoading, isError } = useExamScores(exam._id);
  const scores = data?.scores || [];

  // Close modal on outside click or ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowForm(false);
        setShowScores(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowForm(false);
        setShowScores(false);
      }
    };

    if (showForm || showScores) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showForm, showScores]);

  if (!exam) return <p className="text-muted-foreground">No exam data available</p>;

  return (
    <div className="space-y-6 max-w-4xl mx-auto p-6">
      {/* Exam Info */}
      <div className="bg-white dark:bg-[#1f2937] rounded-xl p-6 shadow-md border border-border dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-2">{exam.title}</h2>
        <p className="text-muted-foreground mb-4">{exam.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Class Level:</strong> {exam.classLevel}</p>
          <p><strong>Duration:</strong> {exam.duration} mins</p>
          <p>
            <strong>Status:</strong>{" "}
            {exam.isPublished ? (
              <Badge className="bg-green-600">Published</Badge>
            ) : (
              <Badge className="bg-yellow-500">Draft</Badge>
            )}
          </p>
          <p><strong>Start:</strong> {dayjs(exam.startDate).format("MMMM D, YYYY")}</p>
          <p><strong>End:</strong> {dayjs(exam.endDate).format("MMMM D, YYYY")}</p>
          <p><strong>Total Questions:</strong> {exam.questions.length}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <Button
          className="bg-blue-600 text-white flex items-center gap-2"
          onClick={() => setShowScores(true)}
        >
          <Eye size={16} />
          View Scores
        </Button>

        <Button
          className="bg-primary text-white flex items-center gap-2"
          onClick={() => setShowForm(true)}
        >
          <Plus size={16} />
          Add New Question
        </Button>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Questions</h3>
        {exam.questions.map((q, idx) => (
          <div
            key={q._id}
            className="border border-border dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-[#1f2937] shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">
                {idx + 1}. {q.text}
              </h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({q.type}, {q.points} pts)
              </span>
            </div>

            {q.type === "multiple-choice" && (
              <ul className="list-disc list-inside space-y-1 pl-4">
                {q.options.map((opt, i) => (
                  <li
                    key={i}
                    className={`${
                      opt === q.correctAnswer ? "font-bold text-green-600 dark:text-green-400" : ""
                    }`}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}

            {q.type === "true-false" && (
              <p>
                <strong>Correct Answer:</strong>{" "}
                <span className="text-green-600 dark:text-green-400">{q.correctAnswer}</span>
              </p>
            )}

            {q.type === "short-answer" && (
              <p>
                <strong>Expected Answer:</strong>{" "}
                <span className="italic text-muted-foreground">{q.correctAnswer}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Modal for Add Question Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg border border-border w-full max-w-2xl"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <AddQuestionForm
              exams={[{ _id: exam._id, title: exam.title }]}
              onSubmit={handleQuestionSubmit}
              defaultExamId={exam._id}
            />
          </div>
        </div>
      )}

      {/* Modal for View Scores */}
      {showScores && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg border border-border w-full max-w-3xl overflow-auto max-h-[90vh]"
          >
            <button
              onClick={() => setShowScores(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-semibold mb-4">Students' Scores</h3>

            {isLoading ? (
              <p>Loading scores...</p>
            ) : isError ? (
              <p className="text-red-500">Failed to load scores.</p>
            ) : scores.length === 0 ? (
              <p className="text-muted-foreground">No students have taken this exam yet.</p>
            ) : (
             <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
      <thead className="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th className="p-2 text-left">Student Name</th>
          <th className="p-2 text-left">Score</th>
          <th className="p-2 text-left">Submitted</th>
          <th className="p-2 text-left">Start Time</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((item) => (
          <tr key={item._id} className="border-t border-border dark:border-gray-700">
            <td className="p-2">{item.student?.fullName || "Unknown"}</td>
            <td className="p-2">{item.score}</td>
            <td className="p-2">
              <Badge variant={item.isSubmitted ? "success" : "destructive"}>
                {item.isSubmitted ? "Submitted" : "Not Submitted"}
              </Badge>
            </td>
            <td className="p-2">
              {dayjs(item.startTime).format("MMM D, YYYY HH:mm")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

            )}
          </div>
        </div>
      )}
    </div>
  );
}
