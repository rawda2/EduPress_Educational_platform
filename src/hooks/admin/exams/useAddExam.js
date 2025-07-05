import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExamAPI } from "@/services/AdminAPI";
import { toast } from "sonner";

export function useAddExam({ onSuccess } = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData) => {
      const response = await createExamAPI(formData);
      return response;
    },
    onSuccess: (data) => {
      console.log("✅ Exam created successfully:", data);
      toast.success("Exam added successfully ✅");
      queryClient.invalidateQueries(["exams"]);
      onSuccess?.(); 
    },
    onError: (error) => {
      const serverMessage = error?.response?.data?.message;
      const serverErrors = error?.response?.data?.errors;

      console.error("❌ Backend error:", {
        message: serverMessage,
        errors: serverErrors,
        fullError: error?.response?.data,
      });

      toast.error(
        serverMessage || "Failed to add exam ❌"
      );
    },
  });
}
