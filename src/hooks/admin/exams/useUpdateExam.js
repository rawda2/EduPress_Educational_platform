import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateExamAPI } from "@/services/AdminAPI";
import { toast } from "sonner"; 

export function useUpdateExam({ onSuccess } = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ examId, data }) => updateExamAPI(examId, data),
    onSuccess: (data) => {
      console.log("✅ Exam updated successfully:", data);
      toast.success("Exam updated successfully ✅"); 
      queryClient.invalidateQueries(["exams"]); 
      onSuccess?.(); 
    },
    onError: (error) => {
      const serverMessage = error?.response?.data?.message;
      const serverErrors = error?.response?.data?.errors;

      console.error("❌ Backend update error:", {
        message: serverMessage,
        errors: serverErrors,
        fullError: error?.response?.data,
      });

      toast.error(
        serverMessage || "Failed to update exam ❌"
      );
    },
  });
}
