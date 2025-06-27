import { useQuery } from "@tanstack/react-query";
import { fetchAllUsersAPI } from "@/services/AdminAPI";

export function useAllUsers() {
  return useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const result = await fetchAllUsersAPI();
      if (!result.success) throw new Error(result.message);
      return result.users;
    },
  });
}
