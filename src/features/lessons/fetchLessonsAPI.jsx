// src/features/lessons/useLessons.js
import axios from "axios";
import { GET_LESSONS_URL } from "@/services/AdminAPI"; 

export async function fetchLessonsAPI() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(GET_LESSONS_URL, {
      headers: {
        token: token,
      },
    });

    return {
      success: true,
      lessons: response.data?.data || [],
    };
  } catch (error) {
    console.error("Failed to fetch lessons:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Error fetching lessons",
    };
  }
}
