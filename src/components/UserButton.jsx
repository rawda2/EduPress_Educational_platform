import { Link } from "react-router";
import { LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import userAvatar from "@/assets/user-avatar.png";

export default function UserButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer size-12">
          <AvatarImage src={userAvatar} alt="avatar" />
          <AvatarFallback>username</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="space-y-1">
        <DropdownMenuLabel>logged in as @username</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            to="/profile"
            className="flex items-center gap-2 cursor-pointer"
          >
            <User className="size-4 text-inherit" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button
            className="w-full flex items-center gap-2 cursor-pointer hover:bg-red-500/10 focus:bg-red-500/10 hover:text-red-500 focus:text-red-500 rounded-md px-2 py-1"
            variant="destructive"
            onClick={() => console.log("logging out...")}
          >
            <LogOut className="size-4 text-inherit" />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
