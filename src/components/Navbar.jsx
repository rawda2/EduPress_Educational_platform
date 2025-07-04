import { Link, useLocation } from "react-router";
import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  // { title: "Blog", href: "/blog" },
  { title: "Lessons", href: "/lessons" },
  { title: "Exams", href: "/exams" },
  // { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row gap-8">
        {links.map(({ title, href }) => (
          <li key={href}>
            <Link
              to={href}
              className={cn(
                "cursor-pointer font-medium hover:text-primary",
                pathname === href ? "text-primary" : "text-card-foreground"
              )}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MobileNavbar() {
  const { pathname } = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" className="md:hidden">
          <Menu className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:hidden w-[calc(100vw-2rem)] mt-4 ml-4">
        {links.map(({ title, href }) => (
          <DropdownMenuItem asChild key={href}>
            <Link
              to={href}
              className={cn(
                "text-sm font-semibold hover:text-primary cursor-pointer",
                pathname === href ? "text-primary" : "text-card-foreground"
              )}
            >
              {title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
