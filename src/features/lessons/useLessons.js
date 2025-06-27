import { useQuery } from "@tanstack/react-query";

import { getAllLessons } from "@/services/lessonsAPI";

export default function useLessons() {
  const {
    isLoading,
    error,
    data: lessons,
  } = useQuery({
    queryKey: ["lessons"],
    queryFn: getAllLessons,
  });

  return { isLoading, error, lessons };
}
