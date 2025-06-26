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

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b shadow-sm">
      {/* Left: Logo that switches with theme */}
      <div className="h-8 flex items-center gap-3">
        {/* Hamburger menu visible on small screens only */}
        <SidebarSheet />

        {/* Logo */}
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

      {/* Right: Theme toggle and user menu */}
      <div className="flex items-center gap-4">
        <ThemeToggle />

        {/* Avatar dropdown menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar>
              <AvatarFallback className="text-xs">AD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuLabel>
              Admin
              <div className="text-xs text-muted-foreground">Super</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:text-destructive cursor-pointer"
              onClick={() => console.log("Logging out...")}
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
