import StatsCards from "@/features/admin/StatsCards";
import QuickActions from "@/features/admin/QuickActions";
import { useAllUsers } from "@/hooks/admin/useAllUsers";
import { useLessons } from "@/hooks/admin/useLessons";
import { useExams } from "@/hooks/admin/exams/useExams";
import { useQuestions } from "@/hooks/admin/questions/useQuestions";

export default function DashboardHome() {
  const { data: users = [], isLoading: loadingUsers } = useAllUsers();
  const { data: lessons = [], isLoading: loadingLessons } = useLessons();
  const { data: exams = [], isLoading: loadingExams } = useExams();
  const { data: questions = [], isLoading: loadingQuestions } = useQuestions();

  const isLoading = loadingUsers || loadingLessons || loadingExams || loadingQuestions;

  const stats = {
    students: users.filter((u) => u.role === "user").length,
    lessons: lessons.length,
    exams: exams.length,
    questions: questions.length,
  };

  return (
    <div className="space-y-6 px-4 py-6">
      <h1 className="text-2xl font-semibold">Dashboard Overview</h1>

      {isLoading ? (
        <p className="text-muted-foreground">Loading stats...</p>
      ) : (
        <StatsCards stats={stats} />
      )}

      <div className="mt-6">
        <QuickActions />
      </div>
    </div>
  );
}
