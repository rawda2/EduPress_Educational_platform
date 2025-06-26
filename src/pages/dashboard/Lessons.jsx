import React, { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import LessonsTable from "@/components/dashboard/LessonsTable";

export default function Lessons() {
  const fakeLessons = [
    {
      _id: "1",
      title: "Math Basics",
      description: "Introduction to numbers and operations",
      videoUrl: "https://example.com/video1",
      classLevel: "grade-5",
      price: 0,
    },
    {
      _id: "2",
      title: "Science Advanced",
      description: "Electricity and circuits",
      videoUrl: "https://example.com/video2",
      classLevel: "grade-6",
      price: 150,
    },
    {
      _id: "3",
      title: "Arabic Grammar",
      description: "Learn noun and verb rules",
      videoUrl: "https://example.com/video3",
      classLevel: "grade-5",
      price: 75,
    },
  ];

  const [selectedClassLevel, setSelectedClassLevel] = useState("all");

  const handleShow = (lesson) => {
    console.log("Show details for:", lesson);
  };

  const handleEdit = (lesson) => {
    console.log("Edit lesson:", lesson);
  };

  const handleDelete = (id) => {
    console.log("Delete lesson with id:", id);
  };

  const filteredLessons =
    selectedClassLevel === "all"
      ? fakeLessons
      : fakeLessons.filter((lesson) => lesson.classLevel === selectedClassLevel);

  return (
    <div className="space-y-6">
  {/* Header with Add Button */}
  <div className="flex items-center justify-between">
    <h1 className="text-2xl font-semibold">Lessons</h1>
    <Button className="bg-primary text-white flex items-center gap-2">
      <Plus size={16} />
      Add New Lesson
    </Button>
  </div>

  {/* Filter Dropdown */}
  <div className="w-[200px]">
    <Select value={selectedClassLevel} onValueChange={setSelectedClassLevel}>
      <SelectTrigger>
        <SelectValue placeholder="Filter by class" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Grades</SelectItem>
        <SelectItem value="grade-5">Grade 5</SelectItem>
        <SelectItem value="grade-6">Grade 6</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Lessons Table */}
  <LessonsTable
    lessons={filteredLessons}
    onShow={handleShow}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />
</div>

  );
}
