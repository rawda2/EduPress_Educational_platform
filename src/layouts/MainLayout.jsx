import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <h1>MainLayout</h1>
      <Outlet />
    </div>
  );
}
