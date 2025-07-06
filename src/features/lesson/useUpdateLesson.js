import { updateLesson } from "@/services/lessonAPI";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateLesson() {
  return useMutation({
    mutationFn: updateLesson,
  });
}
