import { lazy } from "react";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";
import ScrollToTop from "@/components/ScrollToTop";
import ProtectedRoute from "@/components/ProtectedRoute";
import SuspenseFallback from "@/components/SuspenseFallback";

const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));
const ProfileLayout = lazy(() => import("@/layouts/ProfileLayout"));
const DashboardLayout = lazy(() => import("@/layouts/DashboardLayout"));

const ProtectedLessonRoute = lazy(() =>
  import("@/components/ProtectedLessonRoute")
);
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Login = lazy(() => import("@/pages/Login"));
const Exams = lazy(() => import("@/pages/Exams"));
const Lessons = lazy(() => import("@/pages/Lessons"));
const Register = lazy(() => import("@/pages/Register"));
const TakeExam = lazy(() => import("@/pages/TakeExam"));
const StartExam = lazy(() => import("@/pages/StartExam"));
const PaidLesson = lazy(() => import("@/pages/PaidLesson"));
const ExamResults = lazy(() => import("@/pages/ExamResults"));
const Profile = lazy(() => import("@/pages/Profile/Profile"));
const Reviews = lazy(() => import("@/pages/Profile/Reviews"));
const SingleLesson = lazy(() => import("@/pages/SingleLesson"));
const Teachers = lazy(() => import("@/pages/Profile/Teachers"));
const ShoppingCart = lazy(() => import("@/pages/ShoppingCart"));
const MyCourses = lazy(() => import("@/pages/Profile/MyCourses"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));
const DashExams = lazy(() => import("@/pages/dashboard/dashExams"));
const DashLessons = lazy(() => import("@/pages/dashboard/dashLessons"));
const DashStudents = lazy(() => import("@/pages/dashboard/dashStudents"));
const DashboardHome = lazy(() => import("@/pages/dashboard/DashboardHome"));
const DashQuestions = lazy(() => import("@/pages/dashboard/dashQuestions"));

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
          <Route
            path="cart"
            element={
              <SuspenseFallback>
                <ShoppingCart />
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
                <DashStudents user="user" />
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
          {/* for s_admin only */}
          <Route
            path="admins"
            element={
              <SuspenseFallback>
                <DashStudents user="admin" />
              </SuspenseFallback>
            }
          />
          {/* <Route path="settings" element={<div>Profile Settings</div>} /> */}
        </Route>

        {/* Exam Routes */}
        <Route
          path="/studentExam/start/:examId"
          element={
            <SuspenseFallback>
              <StartExam />
            </SuspenseFallback>
          }
        />
        <Route
          path="/exam/get/:examId"
          element={
            <SuspenseFallback>
              <TakeExam />
            </SuspenseFallback>
          }
        />
        <Route
          path="/studentExam/exams/score/:examId"
          element={
            <SuspenseFallback>
              <ExamResults />
            </SuspenseFallback>
          }
        />
        <Route
          path="/exam"
          element={
            <SuspenseFallback>
              <Exams />
            </SuspenseFallback>
          }
        />

        {/* Unauthorized Page */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
