import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLessonAPI } from "@/services/AdminAPI";
import { toast } from "sonner";

export function useDeleteLesson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLessonAPI,
    onSuccess: () => {
      toast.success("Lesson deleted successfully");
      queryClient.invalidateQueries(["lessons"]);
    },
    onError: () => {
      toast.error("Failed to delete lesson");
    },
  });
}
