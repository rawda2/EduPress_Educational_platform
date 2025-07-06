import Sidebar from "./../pages/Profile/Sidebar";
import { Outlet } from "react-router";

export default function ProfileLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1  ">
        <Outlet />
      </main>
    </div>
  );
}
