import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuestionAPI } from "@/services/AdminAPI";
import { toast } from "sonner";

export const useUpdateQuestion = ({ onSuccess } = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ questionId, data }) => updateQuestionAPI(questionId, data),
    onSuccess: (response) => {
      console.log("✅ Question updated:", response);
      toast.success("Question updated successfully ✅");
      queryClient.invalidateQueries(["questions"]);
      onSuccess?.(response); 
    },
    onError: (error) => {
      const msg = error?.response?.data?.message || "Failed to update question ❌";
      console.error("❌ Question update error:", error?.response?.data || error);
      toast.error(msg);
    },
  });
};
