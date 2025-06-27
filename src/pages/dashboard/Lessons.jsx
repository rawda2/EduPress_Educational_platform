import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import LessonsTable from "@/features/admin/LessonsTable";
import { useLessons } from "@/hooks/admin/useLessons";
import React, { useState} from "react";

export default function Lessons() {
  const { data, isLoading, isError } = useLessons();
  const [selectedClassLevel, setSelectedClassLevel] = useState("all");

  const lessons = data || [];

  const filteredLessons =
    selectedClassLevel === "all"
      ? lessons
      : lessons.filter((lesson) => lesson.classLevel === selectedClassLevel);

  const handleShow = (lesson) => console.log("Show details for:", lesson);
  const handleEdit = (lesson) => console.log("Edit lesson:", lesson);
  const handleDelete = (id) => console.log("Delete lesson with id:", id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Lessons</h1>
        <Button className="bg-primary text-white flex items-center gap-2">
          <Plus size={16} />
          Add New Lesson
        </Button>
      </div>

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

      {isLoading ? (
        <p className="text-muted-foreground">Loading lessons...</p>
      ) : isError ? (
        <p className="text-destructive">Failed to load lessons.</p>
      ) : filteredLessons.length === 0 ? (
        <p className="text-muted-foreground">No lessons found.</p>
      ) : (
        <LessonsTable
          lessons={filteredLessons}
          onShow={handleShow}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

