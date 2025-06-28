import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import dayjs from "dayjs";
import { Plus, X } from "lucide-react";

import AddQuestionForm from "@/features/admin/AddQuestionForm";
import UpdateQuestionForm from "@/features/admin/UpdateQuestionForm";

export default function UpdateExamForm({ exam, onSubmit }) {
  const [formData, setFormData] = useState({
    title: exam?.title || "",
    description: exam?.description || "",
    duration: exam?.duration || "",
    classLevel: exam?.classLevel || "",
    isPublished: exam?.isPublished || false,
    startDate: exam?.startDate ? dayjs(exam.startDate).format("YYYY-MM-DD") : "",
    endDate: exam?.endDate ? dayjs(exam.endDate).format("YYYY-MM-DD") : "",
  });

  const [questions, setQuestions] = useState(exam?.questions || []);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) : value,
    }));
  };

  const handleSwitch = (value) => {
    setFormData((prev) => ({ ...prev, isPublished: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, questions });
  };

  const handleDeleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q._id !== id));
  };

  const handleUpdateQuestion = (updatedQuestion) => {
    setQuestions((prev) =>
      prev.map((q) => (q._id === updatedQuestion._id ? updatedQuestion : q))
    );
    setEditingQuestion(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Update Exam</h2>

      <div className="space-y-2">
        <label className="block font-medium">Exam Title</label>
        <Input name="title" value={formData.title} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Description</label>
        <Textarea name="description" value={formData.description} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Duration (minutes)</label>
        <Input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <label className="block font-medium">Class Level</label>
        <Select
          value={formData.classLevel}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, classLevel: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Class Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Grade 1 Secondary">Grade 1 Secondary</SelectItem>
            <SelectItem value="Grade 2 Secondary">Grade 2 Secondary</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-3">
        <span>Published:</span>
        <Switch checked={formData.isPublished} onCheckedChange={handleSwitch} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block font-medium">Start Date</label>
          <Input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">End Date</label>
          <Input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
        </div>
      </div>

      {/* Questions Section */}
      <div className="space-y-3 pt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Questions</h3>
          <Button
            type="button"
            onClick={() => setShowAddForm(true)}
            className="bg-primary text-white flex items-center gap-2"
          >
            <Plus size={16} />
            Add New Question
          </Button>
        </div>

        {questions.length === 0 ? (
          <p className="text-muted-foreground">No questions added yet.</p>
        ) : (
          questions.map((q, i) => (
            <div key={q._id} className="p-4 border rounded-md bg-white dark:bg-[#1f2937] space-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">
                    {i + 1}. {q.text}
                  </p>
                  <p className="text-sm text-gray-500">
                    Type: {q.type} | Points: {q.points}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" size="sm" onClick={() => setEditingQuestion(q)}>
                    Edit
                  </Button>
                  <Button type="button" variant="destructive" size="sm" onClick={() => handleDeleteQuestion(q._id)}>
                    Delete
                  </Button>
                </div>
              </div>

              {q.type === "multiple-choice" && (
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                  {q.options.map((opt, idx) => (
                    <li
                      key={idx}
                      className={opt === q.correctAnswer ? "font-semibold text-green-600" : ""}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}

              {q.type === "true-false" && (
                <p className="text-sm">
                  Correct Answer: <span className="text-green-600">{q.correctAnswer}</span>
                </p>
              )}

              {q.type === "short-answer" && (
                <p className="text-sm italic text-muted-foreground">
                  Expected Answer: {q.correctAnswer}
                </p>
              )}
            </div>
          ))
        )}
      </div>

      <Button type="submit" className="bg-blue-600 text-white mt-4">
        Save Changes
      </Button>

      {/* Add Question Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg border border-border w-full max-w-2xl mx-auto">
            <button
              onClick={() => setShowAddForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <AddQuestionForm
              examId={exam._id}
              onCancel={() => setShowAddForm(false)}
              onSuccess={(newQ) => {
                setQuestions((prev) => [...prev, newQ]);
                setShowAddForm(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Edit Question Modal */}
      {editingQuestion && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg border border-border w-full max-w-2xl mx-auto">
            <button
              onClick={() => setEditingQuestion(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <UpdateQuestionForm
              question={editingQuestion}
              onCancel={() => setEditingQuestion(null)}
              onSuccess={(updated) => handleUpdateQuestion(updated)}
            />
          </div>
        </div>
      )}
    </form>
  );
}
