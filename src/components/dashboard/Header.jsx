import React, { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "@/components/dashboard/ThemeToggle";
import SidebarSheet from "@/components/dashboard/SidebarSheet";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { fetchCurrentUser } from "@/features/auth/fetchCurrentUser";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const result = await fetchCurrentUser();
      if (result.success) {
        setUser(result.user);
      } else {
        console.error(result.message);
      }
    }

    fetchUser();
  }, []);

  const getInitials = (name) => {
    if (!name) return "AD";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b shadow-sm">
      {/* Left: Logo + Sidebar Menu */}
      <div className="h-8 flex items-center gap-3">
        <SidebarSheet />
        <img
          src="src/assets/logo-light.svg"
          alt="Logo"
          className="block dark:hidden h-8"
        />
        <img
          src="src/assets/logo-dark.svg"
          alt="Logo"
          className="hidden dark:block h-8"
        />
      </div>

      {/* Right: Theme + User */}
      <div className="flex items-center gap-4">
        <ThemeToggle />

        {/* Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar>
              <AvatarFallback className="text-xs">
                {getInitials(user?.fullName)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuLabel>
              {user?.fullName || "Loading..."}
              <div className="text-xs text-muted-foreground">
                {user?.email || ""}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:text-destructive cursor-pointer"
             onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/unauthorized"; 
            }}

            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
