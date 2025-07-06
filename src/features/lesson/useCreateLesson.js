import { createLesson } from "@/services/lessonAPI";
import { useMutation } from "@tanstack/react-query";

export default function useCreateLesson() {
  return useMutation({
    mutationFn: createLesson, 
  });
}
