import { SIGNUP_URL } from "@/services/AuthAPI";
import axios from "axios";
import { toast } from "sonner";

export async function registerUser(userData, form) {
  try {
    const res = await axios.post(SIGNUP_URL, userData);
    if (res.data.success) {
      form.reset();
      toast.success(
        "Account created! A verification email will be sent to you in moments.",
        {
          duration: 4000,
          position: "top-center",
        }
      );
      return { success: true };
    }
  } catch (error) {
    const message = error.response?.data?.message;

    if (message === "user already exist") {
      form.setError("email", { message });
    } else {
      toast.error("An unexpected error occurred. Please try again later.", {
        duration: 4000,
        position: "top-center",
      });
    }
    return { success: false };
  }
}
