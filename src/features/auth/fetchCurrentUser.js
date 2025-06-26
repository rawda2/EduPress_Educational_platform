// src/features/auth/useCurrentUser.js
import axios from "axios";
import { GET_CURRENT_USER_URL } from "@/services/AdminAPI";

export async function fetchCurrentUser() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found");
      return { success: false, message: "Unauthorized: No token found" };
    }

    const response = await axios.get(GET_CURRENT_USER_URL, {
      headers: {
        token: token, 
      },
    });

    return {
      success: true,
      user: response.data?.data,
    };
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    const message = error.response?.data?.message || "Something went wrong";
    return { success: false, message };
  }
}
