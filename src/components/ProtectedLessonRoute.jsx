import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";

const ProtectedLessonRoute = ({ children, use }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const res = await axios.get(
          `https://edu-master-delta.vercel.app/lesson/${id}`,
          {
            headers: {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1obXdkYmhqdDMwN0BnbWFpbC5jb20iLCJfaWQiOiI2ODUzMDNkYWNhZTIyN2VkMjM0MWQ3ZGQiLCJpYXQiOjE3NTE0NjQ0ODksImV4cCI6MTc1MTU1MDg4OX0.x2RuausRJ9aYLBXIbeVhrpU1UhoQ2c-6D7JRJ26cKmM",
            },
          }
        );
        setHasAccess(res.data.success);
      } catch (err) {
        console.error(err);
        setHasAccess(err.response.data.success);
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [id]);

  if (loading)
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
