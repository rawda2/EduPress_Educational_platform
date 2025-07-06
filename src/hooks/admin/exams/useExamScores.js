import { useQuery } from "@tanstack/react-query";
import { fetchExamScoresAPI } from "@/services/AdminAPI";

export function useExamScores(examId, studentName = "") {
  return useQuery({
    queryKey: ["exam-scores", examId, studentName],
    queryFn: () => fetchExamScoresAPI(examId, studentName),
    enabled: !!examId, // Only fetch when examId is provided
    staleTime: 5 * 60 * 1000, // Optional: cache for 5 minutes
  });
}
