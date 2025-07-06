import React, { useState, useRef, useEffect } from "react";
import LessonsTable from "@/features/admin/LessonsTable";
import ViewLessonDetails from "@/features/admin/ViewLessonDetails";
import ConfirmDialog from "@/features/admin/ConfirmDialog";
import { useLessons } from "@/hooks/admin/useLessons";
import { useDeleteLesson } from "@/hooks/admin/useDeleteLesson";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import { LessonModalFrom } from "@/components/dashboard/LessonModal";

export default function DashLessons() {
  const [classLevel, setClassLevel] = useState("all");
  const [isPaid, setIsPaid] = useState("all"); // "all" | "true" | "false"
  const [title, setTitle] = useState("");
  const [sortBy, setSortBy] = useState("scheduledDate");
  const [sortOrder, setSortOrder] = useState("asc");

  const filters = {};
  if (classLevel !== "all") filters.classLevel = classLevel;
  if (isPaid !== "all") filters.isPaid = isPaid === "true"; 
  if (title.trim() !== "") filters.title = title.trim();
  if (sortBy) filters.sortBy = sortBy;
  if (sortOrder) filters.sortOrder = sortOrder;

  const { data, isLoading, isError, refetch } = useLessons(filters);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonToDelete, setLessonToDelete] = useState(null);

  const { mutate: deleteLesson, isPending: isDeleting } = useDeleteLesson();
  const modalRef = useRef(null);
  const lessons = data || [];

  const allClassLevels = Array.from(new Set(lessons.map((lesson) => lesson.classLevel))).filter(Boolean);

  const handleShow = (lesson) => {
    setSelectedLesson(lesson);
    setShowDetails(true);
  };

  const handleDelete = (lesson) => {
    setLessonToDelete(lesson);
  };

  const confirmDelete = () => {
    if (lessonToDelete?._id) {
      deleteLesson(lessonToDelete._id, {
        onSuccess: () => {
          setLessonToDelete(null);
          refetch();
          setShowDetails(false);
        },
      });
    }
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowDetails(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowDetails(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="space-y-6 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Lessons</h1>
        <LessonModalFrom use="Add"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-6 border-b border-gray-300 dark:border-gray-700 mb-8">

        {/* Class Level */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Class Level
          </label>
          <Select value={classLevel} onValueChange={setClassLevel}>
            <SelectTrigger className="min-w-[150px]">
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
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Payment
          </label>
          <Select value={isPaid} onValueChange={setIsPaid}>
            <SelectTrigger className="min-w-[150px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="true">Paid</SelectItem>
              <SelectItem value="false">Free</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Title Search */}
        <div className="flex flex-col">
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

        {/* Sort By */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Sort By
          </label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="min-w-[150px]">
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
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Sort Order
          </label>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="min-w-[150px]">
              <SelectValue placeholder="Sort Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>


      {isLoading ? (
        <p className="text-muted-foreground">Loading lessons...</p>
      ) : isError ? (
        <p className="text-destructive">Error loading lessons</p>
      ) : lessons.length === 0 ? (
        <p className="text-muted-foreground">No lessons found</p>
      ) : (
        <LessonsTable lessons={lessons} onShow={handleShow} onDelete={handleDelete} />
      )}

      {showDetails && selectedLesson && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg border border-border w-full max-w-3xl mx-auto overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
            >
              <X size={20} />
            </button>
            <ViewLessonDetails lesson={selectedLesson} />
          </div>
        </div>
      )}

      {lessonToDelete && (
        <ConfirmDialog
          title="Delete Lesson"
          message={`Are you sure you want to delete "${lessonToDelete.title}"? This action cannot be undone.`}
          onCancel={() => setLessonToDelete(null)}
          onConfirm={confirmDelete}
          loading={isDeleting}
        />
      )}
    </div>
  );
}
