import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateQuestionAPI } from "@/services/AdminAPI";

export const useUpdateQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ questionId, data }) =>
      updateQuestionAPI({ questionId, data }),
    onSuccess: () => {
      toast.success("Question updated successfully");
      queryClient.invalidateQueries(["exams"]);
    },
    onError: () => {
      toast.error("Failed to update question");
    },
  });
};
