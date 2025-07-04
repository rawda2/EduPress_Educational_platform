// hooks/admin/questions/useAddQuestion.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuestionAPI } from "@/services/AdminAPI";
import { toast } from "sonner";

export const useAddQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (questionData) => createQuestionAPI(questionData),
    onSuccess: (data) => {
      if (data?.success) {
        toast.success("Question added successfully");
        queryClient.invalidateQueries(["exams"]);
      } else {
        toast.error(data?.message || "Failed to add question");
      }
    },
    onError: () => {
      toast.error("Failed to add question");
    },
  });
};

