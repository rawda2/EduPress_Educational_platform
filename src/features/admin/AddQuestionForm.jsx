import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function AddQuestionForm({ exams = [], onSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    type: "",
    options: [],
    correctAnswer: "",
    exam: "",
    points: "",
  });

  const [optionInputs, setOptionInputs] = useState(["", "", "", ""]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOptionChange = (index, value) => {
    const updated = [...optionInputs];
    updated[index] = value;
    setOptionInputs(updated);
    setFormData((prev) => ({ ...prev, options: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      options:
        formData.type === "multiple-choice"
          ? optionInputs
          : formData.type === "true-false"
          ? ["True", "False"]
          : [],
    };
    onSubmit(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-[#1f2937] text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-md border border-border dark:border-gray-700 max-w-2xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Question</h2>

      <div className="space-y-2">
        <Label>Question Text</Label>
        <Textarea
          value={formData.text}
          onChange={(e) => handleChange("text", e.target.value)}
          placeholder="Enter the question"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Type</Label>
        <Select onValueChange={(val) => handleChange("type", val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select question type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
            <SelectItem value="true-false">True / False</SelectItem>
            <SelectItem value="short-answer">Short Answer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {formData.type === "multiple-choice" && (
        <div className="space-y-2">
          <Label>Options</Label>
          {optionInputs.map((opt, idx) => (
            <Input
              key={idx}
              placeholder={`Option ${idx + 1}`}
              value={opt}
              onChange={(e) => handleOptionChange(idx, e.target.value)}
              required
            />
          ))}
        </div>
      )}

      {formData.type === "true-false" && (
        <div className="space-y-2">
          <Label>Correct Answer</Label>
          <Select onValueChange={(val) => handleChange("correctAnswer", val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select correct answer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="True">True</SelectItem>
              <SelectItem value="False">False</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {formData.type === "short-answer" && (
        <div className="space-y-2">
          <Label>Correct Answer</Label>
          <Textarea
            value={formData.correctAnswer}
            onChange={(e) => handleChange("correctAnswer", e.target.value)}
            placeholder="Enter expected answer"
          />
        </div>
      )}

      {formData.type === "multiple-choice" && (
        <div className="space-y-2">
          <Label>Correct Answer</Label>
          <Input
            value={formData.correctAnswer}
            onChange={(e) => handleChange("correctAnswer", e.target.value)}
            placeholder="Exact correct option"
            required
          />
        </div>
      )}

      <div className="space-y-2">
        <Label>Exam</Label>
        <Select onValueChange={(val) => handleChange("exam", val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select exam" />
          </SelectTrigger>
          <SelectContent>
            {exams.map((exam) => (
              <SelectItem key={exam._id} value={exam._id}>
                {exam.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Points</Label>
        <Input
          type="number"
          value={formData.points}
          onChange={(e) => handleChange("points", e.target.value)}
          placeholder="e.g. 2"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Submit Question
      </Button>
    </form>
  );
}
