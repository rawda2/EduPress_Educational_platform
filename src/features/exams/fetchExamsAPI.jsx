import axios from "axios";
import { GET_EXAMS_URL } from "@/services/AdminAPI"; 

export const fetchExamsAPI = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(GET_EXAMS_URL, {
      headers: {
        token: token, 
      },
    });

    return {
      success: true,
      exams: response.data?.data || [],
    };
  } catch (error) {
    console.error("Failed to fetch exams:", error);
    return {
      success: false,
      message: error.response?.data?.message || "Failed to load exams",
    };
  }
};
