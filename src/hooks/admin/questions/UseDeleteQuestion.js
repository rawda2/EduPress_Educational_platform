// hooks/admin/questions/useDeleteQuestion.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestionAPI } from "@/services/AdminAPI";
import { toast } from "sonner";

export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteQuestionAPI,
    onSuccess: () => {
      toast.success("Question deleted successfully");
      queryClient.invalidateQueries(["exams"]);
    },
    onError: () => {
      toast.error("Failed to delete question");
    },
  });
};
