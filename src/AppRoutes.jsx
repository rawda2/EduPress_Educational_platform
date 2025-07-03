import { lazy } from "react";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";
import ScrollToTop from "@/components/ScrollToTop";
import ProtectedRoute from "@/components/ProtectedRoute";
import SuspenseFallback from "@/components/SuspenseFallback";
import ProtectedLessonRoute from "@/components/ProtectedLessonRoute";

const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const ProfileLayout = lazy(() => import("@/layouts/ProfileLayout"));
const DashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Lessons = lazy(() => import("@/pages/Lessons"));
const Profile = lazy(() => import("@/pages/Profile"));
const SingleLesson = lazy(() => import("@/pages/SingleLesson"));

const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));

const TakeExam = lazy(() => import("@/pages/TakeExam"));
const StartExam = lazy(() => import("@/pages/StartExam"));
const PaidLesson = lazy(() => import("@/pages/PaidLesson"));
const ExamResults = lazy(() => import("@/pages/ExamResults"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));


const DashboardHome = lazy(() => import("@/pages/DashboardHome"));
const DashExams = lazy(() => import("@/pages/dashboard/dashExams"));
const DashLessons = lazy(() => import("@/pages/dashboard/dashLessons"));
const DashStudents = lazy(() => import("@/pages/dashboard/dashStudents"));
const DashQuestions = lazy(() => import("@/pages/dashboard/dashQuestions"));

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
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
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
          <Route
            path="about"
            element={
              <SuspenseFallback>
                <About />
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
            path="lessons/pay/:id"
            element={
              <SuspenseFallback>
                <ProtectedLessonRoute use="payRoute">
                  <SingleLesson />
                </ProtectedLessonRoute>
              </SuspenseFallback>
            }
          />
          <Route
            path="lessons/:id"
            element={
              <SuspenseFallback>
                <ProtectedLessonRoute>
                  <PaidLesson key={location.pathname} />
                </ProtectedLessonRoute>
              </SuspenseFallback>
            }
          />

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
          <Route index element={<Navigate to="login" replace />} />
          <Route
            path="login"
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

        {/* Dashboard Layout */}
        <Route
          path="/dashboard"
          element={
            <SuspenseFallback>
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
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
                <DashLessons />
              </SuspenseFallback>
            }
          />
          <Route
            path="exams"
            element={
              <SuspenseFallback>
                <DashExams />
              </SuspenseFallback>
            }
          />
          <Route
            path="students"
            element={
              <SuspenseFallback>
                <DashStudents />
              </SuspenseFallback>
            }
          />
          <Route
            path="questions"
            element={
              <SuspenseFallback>
                <DashQuestions />
              </SuspenseFallback>
            }
          />
          {/* <Route path="settings" element={<div>Profile Settings</div>} /> */}
        </Route>

        {/* Unauthorized Page */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
