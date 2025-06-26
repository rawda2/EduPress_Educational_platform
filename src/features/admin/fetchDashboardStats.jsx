// src/features/admin/fetchDashboardStats.js

import axios from "axios";
import {
  GET_ALL_USERS_URL,
  GET_ALL_QUESTIONS_URL,
  GET_LESSONS_URL,
  GET_EXAMS_URL,
} from "@/services/AdminAPI";

export async function fetchDashboardStats() {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token not provided");
    return { success: false, message: "Token not provided" };
  }

  try {
    const headers = { token };

    // Get all needed data in parallel
    const [usersRes, questionsRes, lessonsRes, examsRes] = await Promise.all([
      axios.get(GET_ALL_USERS_URL, { headers }),
      axios.get(GET_ALL_QUESTIONS_URL, { headers }),
      axios.get(GET_LESSONS_URL, { headers }),
      axios.get(GET_EXAMS_URL, { headers }),
    ]);

    const users = usersRes.data?.data || [];
    const questions = questionsRes.data?.data || [];
    const lessons = lessonsRes.data?.data || [];
    const exams = examsRes.data?.data || [];

    return {
      success: true,
      stats: {
        students: users.filter((u) => u.role === "user").length,
        admins: users.filter((u) => u.role === "admin").length,
        questions: questions.length,
        lessons: lessons.length,
        exams: exams.length,
      },
    };
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    const message = error.response?.data?.message || "Error loading stats";
    return { success: false, message };
  }
}
