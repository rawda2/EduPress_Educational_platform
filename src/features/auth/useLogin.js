import { LOGIN_URL } from "@/services/AuthAPI";
import axios from "axios";

export async function loginUser(data, form) {
  try {
    const response = await axios.post(LOGIN_URL, data);
    form.reset();
    localStorage.setItem("token", response.data?.token);
    return { success: true };
  } catch (error) {
    const message = error.response?.data?.message;

    if (message === "invalid credentials") {
      form.setError("password", { message: "Password is wrong" });
    } else if (message === "user not found") {
      form.setError("email", {
        message: "No user was found with this email",
      });
    } else if (message === "user not verified") {
      form.setError("email", {
        message: "Please verify your email before logging in, check your mails",
      });
    } else {
      form.setError("password", {
        message:
          "password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number",
      });
    }
    return { success: false };
  }
}