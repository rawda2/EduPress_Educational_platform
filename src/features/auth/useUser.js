import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getCurrentUser } from "@/services/AuthAPI";

export default function useUser() {
  const queryClient = useQueryClient();
  const token = queryClient.getQueryData(["user-token", "user"]);

  const { isLoading, data, error } = useQuery({
    queryKey: ["user-profile", "user"],
    queryFn: () => getCurrentUser(token),
    enabled: !!token,
  });

  return { isLoading, data, error };
}
