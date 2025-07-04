import Sidebar from "./../pages/Profile/Sidebar";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
