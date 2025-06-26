import { RESET_PASSWORD_URL } from "@/services/UserAPI";
import axios from "axios";
import { toast } from "sonner";

export async function resetPassword(setActionSuccess, data, form) {
  try {
    const res = await axios.post(RESET_PASSWORD_URL, data);
    if (res.data.success) {
      setActionSuccess(true);
    }
  } catch (err) {
    const message = err.response?.data?.message;
    if (message === "invalid OTP") {
      form.setError("otp", {
        message: "Invalid OTP. Please make sure its correct.",
      });
    } else if (message === "user not found") {
      form.setError("email", {
        message: "No user was found with this email.",
      });
    } else {
      toast.error("An unexpected error occurred. Please try again later.", {
        duration: 4000,
        position: "top-center",
      });
    }
  }
}
