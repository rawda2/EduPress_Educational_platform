import { toast } from "sonner";
import { deleteLessonAPI } from "@/services/AdminAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
