import axios from "axios";
import { GET_ALL_QUESTIONS_URL } from "@/services/AdminAPI";

export async function fetchQuestionsAPI() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      return { success: false, message: "User token not found" };
    }

    const response = await axios.get(GET_ALL_QUESTIONS_URL, {
      headers: {
        token,
      },
    });

    return {
      success: true,
      questions: response.data.data || [],
    };
  } catch (error) {
    console.error("Failed to fetch questions:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
    };
  }
}
