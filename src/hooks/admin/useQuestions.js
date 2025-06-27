import { useQuery } from "@tanstack/react-query";
import { fetchQuestionsAPI } from "@/services/AdminAPI";

export function useQuestions() {
  return useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      const result = await fetchQuestionsAPI();
      if (!result.success) throw new Error(result.message);
      return result.questions;
    },
  });
}
