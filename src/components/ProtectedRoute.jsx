// import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  // if (isLoading) return (
  //   <div className="flex justify-center items-center min-h-screen">
  //     <Loader2 className="animate-spin size-6" />
  //   </div>
  // );

  // if (error) return <Navigate to="/" replace />;

  // if (!user) return <Navigate to="/signin" replace />;

  return children;
}
