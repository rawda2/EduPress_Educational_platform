// src/services/AdminAPI.js
import axios from "axios";
import { BASE_URL } from "./AuthAPI";

const getTokenHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      token: token,
    },
  };
};

// ========== Admin & User Management ==========
export async function fetchAllUsersAPI() {
  try {
    const response = await axios.get(`${BASE_URL}/admin/all-user`, getTokenHeader());
    return { success: true, users: response.data?.data || [] };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    const message = error.response?.data?.message || "Error fetching users";
    return { success: false, message };
  }
}

export async function fetchAllAdminsAPI() {
  try {
    const response = await axios.get(`${BASE_URL}/admin/all-admin`, getTokenHeader());
    return { success: true, admins: response.data?.data || [] };
  } catch (error) {
    console.error("Failed to fetch admins:", error);
    const message = error.response?.data?.message || "Error fetching admins";
    return { success: false, message };
  }
}

export async function fetchCurrentUserAPI() {
  try {
    const response = await axios.get(`${BASE_URL}/user/`, getTokenHeader());
    return { success: true, user: response.data?.data };
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    const message = error.response?.data?.message || "Error fetching user";
    return { success: false, message };
  }
}

// ========== Lessons ==========
export async function fetchLessonsAPI() {
  try {
    const response = await axios.get(`${BASE_URL}/lesson`, getTokenHeader());
    return { success: true, lessons: response.data?.data || [] };
  } catch (error) {
    console.error("Failed to fetch lessons:", error);
    const message = error.response?.data?.message || "Error fetching lessons";
    return { success: false, message };
  }
}

// ========== Exams ==========
export async function fetchExamsAPI() {
  try {
    const response = await axios.get(`${BASE_URL}/exam`, getTokenHeader());
    return { success: true, exams: response.data?.data || [] };
  } catch (error) {
    console.error("Failed to fetch exams:", error);
    const message = error.response?.data?.message || "Error fetching exams";
    return { success: false, message };
  }
}

// ========== Questions ==========
export async function fetchQuestionsAPI() {
  try {
    const response = await axios.get(`${BASE_URL}/question`, getTokenHeader());
    return { success: true, questions: response.data?.data || [] };
  } catch (error) {
    console.error("Failed to fetch questions:", error);
    const message = error.response?.data?.message || "Error fetching questions";
    return { success: false, message };
  }
}
