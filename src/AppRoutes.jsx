import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import SuspenseFallback from "@/components/SuspenseFallback";

import Lessons from "@/pages/dashboard/Lessons";
import Exams from "@/pages/dashboard/Exams";
import Students from "@/pages/dashboard/Students";
import Questions from "@/pages/dashboard/Questions";

const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const ProfileLayout = lazy(() => import("@/layouts/ProfileLayout"));
const DashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));

const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const Profile = lazy(() => import("@/pages/Profile"));
const Register = lazy(() => import("@/pages/Register"));
const DashboardHome = lazy(() => import("@/pages/DashboardHome"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));



export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Layout */}
        <Route
          path="/"
          element={
            <SuspenseFallback>
              <MainLayout />
            </SuspenseFallback>
          }
        >
          <Route
            index
            element={
              <SuspenseFallback>
                <Home />
              </SuspenseFallback>
            }
          />
        </Route>

        {/* Auth Layout */}
        <Route
          path="/auth"
          element={
            <SuspenseFallback>
              <AuthLayout />
            </SuspenseFallback>
          }
        >
          <Route
            index
            element={
              <SuspenseFallback>
                <Login />
              </SuspenseFallback>
            }
          />
          <Route
            path="register"
            element={
              <SuspenseFallback>
                <Register />
              </SuspenseFallback>
            }
          />
          <Route
            path="forgot-password"
            element={
              <SuspenseFallback>
                <ForgotPassword />
              </SuspenseFallback>
            }
          />
        </Route>

        {/* Profile Layout */}
        <Route
          path="profile"
          element={
            <SuspenseFallback>
              <ProfileLayout />
            </SuspenseFallback>
          }
        >
          <Route
            index
            element={
              <SuspenseFallback>
                <Profile />
              </SuspenseFallback>
            }
          />
          {/* <Route path="settings" element={<div>Profile Settings</div>} /> */}
        </Route>

        {/* Dashboard Layout */}
        <Route
          path="/dashboard"
          element={
            <SuspenseFallback>
              <DashboardLayout />
            </SuspenseFallback>
          }
        >
                <Route
                  index
                  element={
                    <SuspenseFallback>
                      <DashboardHome />
                    </SuspenseFallback>
                  }
                />
                <Route
          path="lessons"
          element={
            <SuspenseFallback>
              <Lessons />
            </SuspenseFallback>
          }
        />
        <Route
          path="exams"
          element={
            <SuspenseFallback>
              <Exams />
            </SuspenseFallback>
          }
        />
        <Route
          path="students"
          element={
            <SuspenseFallback>
              <Students />
            </SuspenseFallback>
          }
        />
         <Route
          path="questions"
          element={
            <SuspenseFallback>
              <Questions />
            </SuspenseFallback>
          }
        />
          {/* <Route path="settings" element={<DashboardSettings />} /> */}
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
