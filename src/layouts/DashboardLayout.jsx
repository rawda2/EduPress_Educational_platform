import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full flex-col bg-white dark:bg-[#111827] text-gray-900 dark:text-gray-100">
      {/* Top header with logo, theme switcher, avatar, and hamburger menu */}
      <Header />

      {/* Main content area with sidebar and outlet */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: hidden on small screens, visible on md+ */}
        <div className="hidden md:block bg-white dark:bg-[#1f2937] border-r dark:border-gray-700">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-[#111827]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
