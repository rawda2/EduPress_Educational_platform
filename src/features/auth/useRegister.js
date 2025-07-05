import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

import { registerUser } from "@/services/AuthAPI";

export default function useRegister() {
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: register } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success(
        "Account successfully created! please verify your account."
      );
      navigate("/auth", { replace: true });
    },
  });

  return { isLoading, register };
}
