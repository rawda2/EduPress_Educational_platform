import { useQuery } from "@tanstack/react-query";
import { fetchExamsAPI } from "@/services/AdminAPI";

export function useExams() {
  return useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      const result = await fetchExamsAPI();
      if (!result.success) throw new Error(result.message);
      return result.exams;
    },
  });
}
