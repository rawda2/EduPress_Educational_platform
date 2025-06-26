import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full flex-col">
      {/* Top header with logo, theme switcher, avatar, and hamburger menu */}
      <Header />

      {/* Main content area with sidebar and outlet */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: hidden on small screens, visible on md+ */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 p-6 bg-muted/20 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
