import { useState } from "react";
import { Loader2 } from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import LessonsTable from "@/features/admin/LessonsTable";
import { LessonModalFrom } from "@/components/dashboard/LessonModal";

import { useLessons } from "@/hooks/admin/useLessons";

export default function DashLessons() {
  const [classLevel, setClassLevel] = useState("all");
  const [isPaid, setIsPaid] = useState("all");
  const [title, setTitle] = useState("");
  const [sortBy, setSortBy] = useState("scheduledDate");
  const [sortOrder, setSortOrder] = useState("asc");

  const filters = {};
  if (classLevel !== "all") filters.classLevel = classLevel;
  if (isPaid !== "all") filters.isPaid = isPaid === "true";
  if (title.trim() !== "") filters.title = title.trim();
  if (sortBy) filters.sortBy = sortBy;
  if (sortOrder) filters.sortOrder = sortOrder;

  const { data, isLoading, isError } = useLessons(filters);
  const lessons = data || [];

  const allClassLevels = Array.from(
    new Set(lessons.map((lesson) => lesson.classLevel))
  ).filter(Boolean);

  return (
    <div className="space-y-6 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Lessons</h1>
        <LessonModalFrom use="Add" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 border-b mb-8">
        {/* Class Level */}
        <div className="w-full flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Class Level
          </label>
          <Select value={classLevel} onValueChange={setClassLevel}>
            <SelectTrigger className="min-w-[150px] w-full">
              <SelectValue placeholder="All Classes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              {allClassLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Payment */}
        <div className="w-full flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Payment
          </label>
          <Select value={isPaid} onValueChange={setIsPaid}>
            <SelectTrigger className="min-w-[150px]  w-full">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="true">Paid</SelectItem>
              <SelectItem value="false">Free</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="w-full flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Sort By
          </label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="min-w-[150px] w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="scheduledDate">Scheduled Date</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="title">Title</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort Order */}
        <div className="w-full flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Sort Order
          </label>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="min-w-[150px] w-full">
              <SelectValue placeholder="Sort Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Title Search */}
        <div className="col-span-2 lg:col-span-4 lg:w-[500px] lg:mx-auto flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <Input
            placeholder="Search by Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full min-w-[150px]"
          />
        </div>
      </div>

      {isLoading ? (
        <Loader2 className="animate-spin size-8 mx-auto my-20" />
      ) : isError ? (
        <p className="text-destructive">Error loading lessons</p>
      ) : lessons.length === 0 ? (
        <p className="text-muted-foreground">No lessons found</p>
      ) : (
        <LessonsTable lessons={lessons} />
      )}
    </div>
  );
}
