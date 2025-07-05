import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { loginUser } from "@/services/AuthAPI";

import { axiosErrorHandler } from "@/lib/utils";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data?.token);
      queryClient.setQueryData(["user-token", "user"], data?.token);
      navigate("/", { replace: true });
      toast.success("Login successful.");
    },
    onError: (err) => {
      console.error("error: ", err);
      toast.error(
        axiosErrorHandler(
          err,
          "An unexpected error occurred. Please try again later."
        )
      );
    },
  });

  return { login, isLoading };
}
