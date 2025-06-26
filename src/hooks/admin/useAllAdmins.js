// src/features/admin/useAllAdmins.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GET_ALL_ADMINS_URL } from "@/services/AdminAPI";

export function useAllAdmins() {
  return useQuery({
    queryKey: ["all-admins"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not provided");

      const response = await axios.get(GET_ALL_ADMINS_URL, {
        headers: { token: `Bearer ${token}` },
      });

      return response.data?.data || [];
    },
  });
}
