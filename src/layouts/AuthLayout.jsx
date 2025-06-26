import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className={"grid grid-cols-2 gap-10 items-center min-h-dvh"}>
      <Outlet />
    </div>
  );
}
