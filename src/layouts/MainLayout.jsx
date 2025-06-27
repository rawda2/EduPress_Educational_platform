import { Outlet } from "react-router";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100dvh-64px)] p-2">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
