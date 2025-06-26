import axios from "axios";
import { FORGOT_PASSWORD_URL } from "@/services/UserAPI";
import { toast } from "sonner";

export async function forgotPassword(data, form, setResetPassword) {
  try {
    const res = await axios.post(FORGOT_PASSWORD_URL, data);
    if (res.data.success) {
      setResetPassword(true);
      toast.success("Reset link sent to your email.", {
        duration: 4000,
        position: "top-center",
      });
    }
  } catch (err) {
    const message = err.response?.data?.message;
    if (message === "invalid credentials") {
      form.setError("email", {
        message: "No user was found by this email.",
      });
    }
  }
}