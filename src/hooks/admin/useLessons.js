import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchLessonsAPI} from "@/services/AdminAPI";

export function useLessons() {
  return useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not provided");
      const { data } = await axios.get(fetchLessonsAPI, {
        headers: { token },
      });
      return data.data || [];
    },
  });
}