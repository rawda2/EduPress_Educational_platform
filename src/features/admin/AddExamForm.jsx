// components/forms/ExamForm.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function AddExamForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    classLevel: "",
    startDate: "",
    endDate: "",
    isPublished: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-[#1f2937] text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-md border border-border dark:border-gray-700 max-w-2xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Exam</h2>

      <div className="space-y-2">
        <Label htmlFor="title">Exam Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Enter exam title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Brief description of the exam"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration">Duration (minutes)</Label>
        <Input
          type="number"
          id="duration"
          value={formData.duration}
          onChange={(e) => handleChange("duration", e.target.value)}
          placeholder="e.g. 60"
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Class Level</Label>
        <Select onValueChange={(val) => handleChange("classLevel", val)}>
          <SelectTrigger>
            <SelectValue placeholder="Select grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Grade 1 Secondary">Grade 1 Secondary</SelectItem>
            <SelectItem value="Grade 2 Secondary">Grade 2 Secondary</SelectItem>
            <SelectItem value="Grade 3 Secondary">Grade 3 Secondary</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            type="date"
            id="startDate"
            value={formData.startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate">End Date</Label>
          <Input
            type="date"
            id="endDate"
            value={formData.endDate}
            onChange={(e) => handleChange("endDate", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Switch
          id="isPublished"
          checked={formData.isPublished}
          onCheckedChange={(checked) => handleChange("isPublished", checked)}
        />
        <Label htmlFor="isPublished">Publish Exam</Label>
      </div>

      <Button type="submit" className="w-full">
        Submit Exam
      </Button>
    </form>
  );
}
