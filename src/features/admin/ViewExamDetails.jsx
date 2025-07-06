import dayjs from "dayjs";
import { useState, useRef, useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import AddQuestionModal from "./questions/AddQuestionModal";
import ViewExamScoresModel from "./exams/ViewExamScoresModel";

export default function ViewExamDetails({ exam }) {
  const [showForm, setShowForm] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const modalRef = useRef(null);

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

  if (!exam)
    return <p className="text-muted-foreground">No exam data available</p>;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="rounded-xl p-6 shadow-md bg-card border">
        <h2 className="text-2xl font-bold mb-2">{exam.title}</h2>
        <p className="text-muted-foreground mb-4">{exam.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
          <p>
            <strong>Class Level:</strong> {exam.classLevel}
          </p>
          <p>
            <strong>Duration:</strong> {exam.duration} mins
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {exam.isPublished ? (
              <Badge>Published</Badge>
            ) : (
              <Badge className="bg-yellow-500">Draft</Badge>
            )}
          </p>
          <p>
            <strong>Start:</strong>{" "}
            {dayjs(exam.startDate).format("MMMM D, YYYY")}
          </p>
          <p>
            <strong>End:</strong> {dayjs(exam.endDate).format("MMMM D, YYYY")}
          </p>
          <p>
            <strong>Total Questions:</strong> {exam.questions.length}
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <ViewExamScoresModel examId={exam?._id} />
        <AddQuestionModal exams={[{ _id: exam._id, title: exam.title }]} />
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Questions</h3>
        {exam.questions.map((q, idx) => (
          <div
            key={q._id}
            className="border border-border rounded-lg p-4 bg-card shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">
                {idx + 1}. {q.text}
              </h4>
              <span className="text-sm">
                ({q.type}, {q.points} pts)
              </span>
            </div>

            {q.type === "multiple-choice" && (
              <ul className="list-disc list-inside space-y-1 pl-4">
                {q.options.map((opt, i) => (
                  <li
                    key={i}
                    className={`${
                      opt === q.correctAnswer
                        ? "font-bold text-green-600 dark:text-green-400"
                        : ""
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
                <span className="text-green-600 dark:text-green-400">
                  {q.correctAnswer}
                </span>
              </p>
            )}

            {q.type === "short-answer" && (
              <p>
                <strong>Expected Answer:</strong>{" "}
                <span className="italic text-muted-foreground">
                  {q.correctAnswer}
                </span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
