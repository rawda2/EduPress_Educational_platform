import { useQuery } from "@tanstack/react-query";
import { fetchLessonsAPI } from "@/services/AdminAPI";

export function useLessons(filters = {}) {
  return useQuery({
    queryKey: ["lessons", filters],
    queryFn: async () => {
      const result = await fetchLessonsAPI(filters);
      return result.data;  
    },
  });
}
