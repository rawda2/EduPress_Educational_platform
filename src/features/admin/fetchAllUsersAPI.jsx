// src/features/admin/fetchAllUsersAPI.js

import axios from "axios";
import { GET_ALL_USERS_URL } from "@/services/AdminAPI";

export async function fetchAllUsersAPI() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not provided");
      return { success: false, message: "Token not provided" };
    }

    const response = await axios.get(GET_ALL_USERS_URL, {
      headers: {
        token: token,
      },
    });

    return {
      success: true,
      users: response.data?.data || [],
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    const message = error.response?.data?.message || "Error fetching users";
    return { success: false, message };
  }
}
