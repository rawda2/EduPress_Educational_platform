import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import profileImg from "./../../assets/Ellipse 53.png";
import share from "./../../assets/share.png";
import { Menu, X } from "lucide-react"; // Use any icon library you prefer

export default function Sidebar() {
  const [profile, setProfile] = useState({});
  const [isOpen, setIsOpen] = useState(false);

const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhd2RhMzIwMDRAZ21haWwuY29tIiwiX2lkIjoiNjg1ZTkyMDdjYzU0YWE0ZDIxMDgxZmQ2IiwiaWF0IjoxNzUxNTM5Njc0LCJleHAiOjE3NTE2MjYwNzR9.vu1s1Mgk1BMjWo528wbVXZgOV19-sDu4Ohm9hGlLTeM";

  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get("https://edu-master-delta.vercel.app/user", {
        headers: {
          token,
        },
      });
      setProfile(response.data.data);
    };
    getProfile();
  }, []);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white border rounded p-2 shadow"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="text-center mt-20 mb-6 flex flex-col items-center">
          <img
            src={profileImg}
            alt="User"
            className="rounded-full w-24 h-24 mx-auto"
          />
          <h3 className="mt-2 font-bold text-xl text-center break-words">
            {profile.fullName}
          </h3>
          <button className="text-sm text-black flex items-center gap-1 mt-2">
            Share Profile
            <img src={share} alt="Share icon" className="w-4 h-4" />
          </button>
        </div>

        <nav className="mt-4">
          <ul className="space-y-2 px-4">
            {[
              { label: "Profile", to: "/profile" },
              { label: "My Courses", to: "/profile/courses" },
              { label: "Teachers", to: "/profile/teachers" },
              { label: "My Reviews", to: "/profile/reviews" },
            ].map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block p-2 ps-4 rounded text-sm ${
                      isActive
                        ? "bg-slate-800 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setIsOpen(false)} // close on mobile link click
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-transparent bg-opacity-30 z-30 md:hidden"
        ></div>
      )}
    </>
  );
}
