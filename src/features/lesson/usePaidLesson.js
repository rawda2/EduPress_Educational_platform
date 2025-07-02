import { getLessonById } from "@/services/lessonAPI";
import { useQuery } from "@tanstack/react-query";

export const usePaidLesson = (id) => {
  return useQuery({
    queryKey: ["paidLesson", id],
    queryFn: () => getLessonById(id),
  });
};
