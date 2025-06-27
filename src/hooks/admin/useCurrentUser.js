import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUserAPI } from "@/services/AdminAPI";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: async () => {
      const result = await fetchCurrentUserAPI();
      if (!result.success) throw new Error(result.message);
      return result.user;
    },
    staleTime: 5 * 60 * 1000,
  });
}
