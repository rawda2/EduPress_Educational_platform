import { useQuery } from "@tanstack/react-query";
import { fetchLessonsAPI } from "@/services/AdminAPI";

export function useLessons() {
  return useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      const result = await fetchLessonsAPI();
      if (!result.success) throw new Error(result.message);
      return result.lessons;
    },
  });
}
