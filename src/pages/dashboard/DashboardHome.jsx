import {
  X,
  Loader2,
  // UserCog, Users
} from "lucide-react";
import { useState, useRef } from "react";

import StatsCards from "@/features/admin/StatsCards";
import AddExamForm from "@/features/admin/AddExamForm";
// import QuickActions from "@/features/admin/QuickActions";
import AddQuestionForm from "@/features/admin/AddQuestionForm";

import { useLessons } from "@/hooks/admin/useLessons";
import { useAllUsers } from "@/hooks/admin/useAllUsers";
import { useExams } from "@/hooks/admin/exams/useExams";
// import { useIsSuperAdmin } from "@/hooks/useIsSuperAdmin";
// import { useAllAdmins } from "@/hooks/admin/useAllAdmins";
import { useQuestions } from "@/hooks/admin/questions/useQuestions";

// import { Cards, SAdminActions } from "../SuperAdmin";

export default function DashboardHome() {
  const { data: exams = [], isLoading: loadingExams } = useExams();
  const { data: users = [], isLoading: loadingUsers } = useAllUsers();
  const { data: lessons = [], isLoading: loadingLessons } = useLessons();
  // const { data: admins = [], isLoading: loadingAdmins } = useAllAdmins();
  const { data: questions = [], isLoading: loadingQuestions } = useQuestions();

  const isLoading =
    loadingUsers || loadingLessons || loadingExams || loadingQuestions;
  // || loadingAdmins;

  const stats = {
    exams: exams.length,
    lessons: lessons.length,
    questions: questions.length,
    students: users.filter((u) => u.role === "user").length,
  };

  const [showExamForm, setShowExamForm] = useState(false);
  const [showLessonForm, setShowLessonForm] = useState(false);
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const modalRef = useRef();
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowLessonForm(false);
      setShowExamForm(false);
      setShowQuestionForm(false);
    }
  };

  // const sAdmin = useIsSuperAdmin();
  // const data = [
  //   {
  //     title: "Students",
  //     value: users.length,
  //     icon: <Users className="text-primary" />,
  //   },
  //   {
  //     title: "Admins",
  //     value: admins.length,
  //     icon: <UserCog className="text-primary" />,
  //   },
  // ];

  return (
    <div className="space-y-6 px-4 py-6">
      <h1 className="text-2xl font-semibold">Dashboard Overview</h1>

      {/* {isLoading ? (
        <p className="text-muted-foreground">Loading stats...</p>
      ) : sAdmin ? (
        <Cards {...{ data }} />
      ) : (
        <StatsCards stats={stats} />
      )} */}

      {isLoading ? (
        <Loader2 className="animate-spin size-8 mx-auto my-28" />
      ) : (
        <StatsCards stats={stats} />
      )}

      {/* <div className="mt-6">
        {sAdmin ? (
          <SAdminActions />
        ) : (
          <QuickActions
            onAddLesson={() => setShowLessonForm(true)}
            onAddExam={() => setShowExamForm(true)}
            onAddQuestion={() => setShowQuestionForm(true)}
          />
        )}
      </div> */}

      {showLessonForm && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-[#1f2937] rounded-xl p-6 max-w-2xl w-full shadow-lg border border-gray-300 dark:border-gray-700"
          >
            <button
              onClick={() => setShowLessonForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
            >
              <X />
            </button>
            <AddLessonForm onSuccess={() => setShowLessonForm(false)} />
          </div>
        </div>
      )}

      {/* Add Exam Modal */}
      {showExamForm && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-[#1f2937] rounded-xl p-6 max-w-2xl w-full shadow-lg border border-gray-300 dark:border-gray-700"
          >
            <button
              onClick={() => setShowExamForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
            >
              <X />
            </button>
            <AddExamForm onSuccess={() => setShowExamForm(false)} />
          </div>
        </div>
      )}

      {/* Add Question Modal */}
      {showQuestionForm && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative bg-white dark:bg-[#1f2937] rounded-xl p-6 max-w-2xl w-full shadow-lg border border-gray-300 dark:border-gray-700"
          >
            <button
              onClick={() => setShowQuestionForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
            >
              <X />
            </button>
            <AddQuestionForm onSuccess={() => setShowQuestionForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
