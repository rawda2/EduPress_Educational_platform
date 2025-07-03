import { Navigate, Outlet } from "react-router";

import LoaderFullScreen from "@/components/LoaderFullScreen";

import useUser from "@/features/auth/useUser";

import { axiosErrorHandler } from "@/lib/utils";

import authImg from "/login.jpg";

export default function AuthLayout() {
  const { isLoading, data: user, error } = useUser();
  if (isLoading) return <LoaderFullScreen />;

  if (error)
    return (
      <div>{axiosErrorHandler(error, "An unexpected error occurred.")}</div>
    );

  if (user) return <Navigate to="/" replace />;

  return (
    <div className="grid grid-cols-2 gap-10 min-h-dvh">
      <div className="max-lg:col-span-2 order-1 space-y-10 w-[80%] mx-auto flex flex-col justify-center">
        <Outlet />
      </div>{" "}
      <div className="h-dvh max-lg:hidden">
        <img
          src={authImg}
          alt="Auth Layout image"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
