import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import SuspenseFallback from "@/components/SuspenseFallback";
import { Toaster } from "sonner";

import Lessons from "@/pages/dashboard/Lessons";
import Exams from "@/pages/dashboard/Exams";
import Students from "@/pages/dashboard/Students";
import Questions from "@/pages/dashboard/Questions";

//Profile Pages

const Profile = lazy(() => import("@/pages/Profile/Profile"));
const MyCourses = lazy(() => import("@/pages/Profile/MyCourses"));
const Teachers = lazy(() => import("@/pages/Profile/Teachers"));
const Reviews = lazy(() => import("@/pages/Profile/Reviews"));



const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const ProfileLayout = lazy(() => import("@/layouts/ProfileLayout"));
const DashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));

const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const DashboardHome = lazy(() => import("@/pages/DashboardHome"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));

const Unauthorized = lazy(() => import("@/pages/Unauthorized"));

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
            path="/profile"
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
           
            
            <Route
              path="courses"
              element={
                <SuspenseFallback>
                  <MyCourses />
                </SuspenseFallback>
              }
            />
            <Route
              path="teachers"
              element={
                <SuspenseFallback>
                  <Teachers />
                </SuspenseFallback>
              }
            />
               <Route
              path="reviews"
              element={
                <SuspenseFallback>
                  <Reviews />
                </SuspenseFallback>
              }
            />
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

        {/* Unauthorized Page */}
        <Route
          path="/unauthorized"
          element={
            <SuspenseFallback>
              <Unauthorized />
            </SuspenseFallback>
          }
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
