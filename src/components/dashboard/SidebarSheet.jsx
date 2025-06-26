// components/dashboard/SidebarSheet.tsx
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, BookOpen, FileText, Users, Home, Globe , HelpCircle} from "lucide-react";
import { Link } from "react-router";

const links = [
  { to: "/", label: "Website", icon: Globe },
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/dashboard/lessons", label: "Lessons", icon: BookOpen },
  { to: "/dashboard/exams", label: "Exams", icon: FileText },
  { to: "/dashboard/students", label: "Students", icon: Users },
 { to: "/dashboard/questions", label: "Questions", icon: HelpCircle }, 

];

export default function SidebarSheet() {
  return (
    <Sheet>
      {/* Hamburger button - visible on small screens only */}
      <SheetTrigger className="block md:hidden p-2 rounded hover:bg-muted transition">
        <Menu className="w-6 h-6" />
      </SheetTrigger>

      {/* Sheet content (sliding sidebar) */}
      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <h2 className="text-xl font-bold">Dashboard</h2>
        </SheetHeader>
        <div className="mt-4 space-y-2">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              to={to}
              key={label}
              className="flex items-center gap-2 p-2 rounded bg-muted hover:bg-muted/60 transition text-muted-foreground"
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
