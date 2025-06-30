// hooks/admin/questions/useAddQuestion.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuestionAPI } from "@/services/AdminAPI";
import { toast } from "sonner";

export const useAddQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (questionData) => createQuestionAPI(questionData), // exam ID جاي من الفورم
    onSuccess: () => {
      toast.success("Question added successfully");
      queryClient.invalidateQueries(["exams"]);
    },
    onError: () => {
      toast.error("Failed to add question");
    },
  });
};
