import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "@/components/ThemeToggle"; 
import SidebarSheet from "@/components/dashboard/SidebarSheet";
import Logo from "@/components/Logo";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { useCurrentUser } from "@/hooks/admin/useCurrentUser";

export default function Header() {
  const { data, isLoading } = useCurrentUser();
  const user = data;

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
        <Logo />
      </div>

      {/* Right: Theme Toggle + User */}
      <div className="flex items-center gap-4">
        <ThemeToggle />  {/* هنا التوجيل */}

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
              {isLoading ? "Loading..." : user?.fullName}
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
