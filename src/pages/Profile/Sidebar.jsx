import { useState } from "react";
import { NavLink } from "react-router";
import { Loader2, Menu, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import useUser from "@/features/auth/useUser";

import userAvatar from "@/assets/user-avatar.png";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, data: user, error } = useUser();
  console.log(user);

  if (isLoading)
    return <Loader2 className="animate-spin size-8 mx-auto my-20" />;

  if (error) return <div>Error in fetching profile data</div>;

  // return null;

  return (
    <>
      {/* Toggle Button for Mobile */}
      <Button
        size="icon"
        variant="outline"
        className="md:hidden fixed top-20 right-4 z-50 rounded p-2 shadow"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-full shadow-lg transform transition-transform duration-300 ease-in-out bg-background border-r text-foreground
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="text-center mt-20 mb-6 flex flex-col items-center">
          <Avatar className="cursor-pointer size-24">
            <AvatarImage src={userAvatar} alt="avatar" />
            <AvatarFallback>{user.fullName}</AvatarFallback>
          </Avatar>
          <h3 className="mt-2 font-bold text-xl text-center break-words">
            {user.fullName}
          </h3>
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
                    `block p-2 ps-4 rounded text-sm hover:bg-accent hover:text-accent-foreground ${
                      isActive ? "bg-accent text-accent-foreground" : ""
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
