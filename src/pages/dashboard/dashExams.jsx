import React, { useState, useRef, useEffect } from "react";
import ExamsTable from "@/features/admin/ExamsTable";
import ViewExamDetails from "@/features/admin/ViewExamDetails";
import UpdateExamForm from "@/features/admin/UpdateExamForm"; // ✨ الجديد
import AddExamForm from "@/features/admin/AddExamForm";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useExams } from "@/hooks/admin/useExams";

export default function DashExams() {
  const { data, isLoading, isError } = useExams();
  const [selectedClassLevel, setSelectedClassLevel] = useState("all");

  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false); // ✨ الجديد
  const [selectedExam, setSelectedExam] = useState(null);

  const modalRef = useRef(null);

  const exams = data || [];

  const filteredExams =
    selectedClassLevel === "all"
      ? exams
      : exams.filter((exam) => exam.classLevel === selectedClassLevel);

  const handleShow = (exam) => {
    setSelectedExam(exam);
    setShowDetails(true);
  };

  const handleEdit = (exam) => {
    setSelectedExam(exam);
    setShowEditForm(true);
  };

  const handleDelete = (id) => console.log("Delete exam:", id);

  const handleExamSubmit = (formData) => {
    console.log("Submitted Exam Data:", formData);
    setShowForm(false);
  };

  const handleExamUpdate = (updatedData) => {
    console.log("Updated Exam Data:", updatedData);
    // TODO: send PUT request to update exam in backend
    setShowEditForm(false);
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowForm(false);
      setShowDetails(false);
      setShowEditForm(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowForm(false);
        setShowDetails(false);
        setShowEditForm(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Exams</h1>
        <Button
          className="bg-primary text-white flex items-center gap-2"
          onClick={() => setShowForm(true)}
        >
          <Plus size={16} />
          Add New Exam
        </Button>
      </div>

      {/* Filter */}
      <div className="w-[200px]">
        <Select
          value={selectedClassLevel}
          onValueChange={setSelectedClassLevel}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Grades</SelectItem>
            <SelectItem value="Grade 1 Secondary">Grade 1 Secondary</SelectItem>
            <SelectItem value="Grade 2 Secondary">Grade 2 Secondary</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      {isLoading ? (
        <p className="text-muted-foreground">Loading exams...</p>
      ) : isError ? (
        <p className="text-destructive">Error loading exams</p>
      ) : filteredExams.length === 0 ? (
        <p className="text-muted-foreground">No exams found</p>
      ) : (
        <ExamsTable
          exams={filteredExams}
          onShow={handleShow}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      {/* Add Exam Modal */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg border border-border w-full max-w-2xl mx-auto"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
              aria-label="Close form"
            >
              <X size={20} />
            </button>
            <AddExamForm onSubmit={handleExamSubmit} />
          </div>
        </div>
      )}

      {/* View Exam Details Modal */}
      {showDetails && selectedExam && (
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
              aria-label="Close details"
            >
              <X size={20} />
            </button>
            <ViewExamDetails exam={selectedExam} />
          </div>
        </div>
      )}

      {/* Edit Exam Modal */}
      {showEditForm && selectedExam && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg border border-border w-full max-w-2xl mx-auto overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={() => setShowEditForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
              aria-label="Close edit"
            >
              <X size={20} />
            </button>
            <UpdateExamForm exam={selectedExam} onSubmit={handleExamUpdate} />
          </div>
        </div>
      )}
    </div>
  );
}
