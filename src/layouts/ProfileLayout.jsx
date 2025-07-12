import { Outlet } from "react-router";

 import Sidebar from "@/pages/Profile/Sidebar";

export default function ProfileLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
