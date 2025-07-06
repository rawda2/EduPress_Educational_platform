import { usePaidLesson } from "@/features/lesson/usePaidLesson";
import { Loader2 } from "lucide-react";
// import { useState } from "react";
import { Navigate, useParams } from "react-router";

const ProtectedLessonRoute = ({ children, use }) => {
  const { id } = useParams();
  const { data, isLoading, isError } = usePaidLesson(id);
  const hasAccess = !!data && !isError;

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[90vh] w-full">
        <Loader2 className="animate-spin size-20 mx-auto mt-10" />
      </div>
    );

  if (use === "payRoute") {
    if (hasAccess) return <Navigate to={`/lessons/${id}`} replace />;
  } else {
    if (!hasAccess) return <Navigate to={`/lessons/pay/${id}`} replace />;
  }

  return children;
};

export default ProtectedLessonRoute;
