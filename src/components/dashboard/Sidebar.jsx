import {
  Home,
  Globe,
  Users,
  // UserCog,
  BookOpen,
  FileText,
  HelpCircle,
} from "lucide-react";
import { Link, useLocation } from "react-router";

import { cn } from "@/lib/utils";
// import { useIsSuperAdmin } from "@/hooks/useIsSuperAdmin";

const adminsLinks = [
  { to: "/", label: "Website", icon: Globe },
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/dashboard/lessons", label: "Lessons", icon: BookOpen },
  { to: "/dashboard/exams", label: "Exams", icon: FileText },
  { to: "/dashboard/questions", label: "Questions", icon: HelpCircle },
  { to: "/dashboard/students", label: "Students", icon: Users },
];

// const sAdminLinks = [
//   { to: "/", label: "Website", icon: Globe },
//   { to: "/dashboard", label: "Home", icon: Home },
//   { to: "/dashboard/students", label: "Students", icon: Users },
//   { to: "/dashboard/admins", label: "Admins", icon: UserCog },
// ];

export default function Sidebar() {
  // const sAdmin = useIsSuperAdmin();

  // const links = sAdmin ? sAdminLinks : adminsLinks;

  const { pathname } = useLocation();

  return (
    <aside className="w-64 p-4 space-y-2">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      {adminsLinks.map(({ to, label, icon }) => {
        const Icon = icon;
        return (
          <Link
            to={to}
            key={label}
            className={cn(
              "flex items-center gap-4 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition",
              pathname === to && "bg-accent text-accent-foreground"
            )}
          >
            <Icon className="size-5" />
            <span>{label}</span>
          </Link>
        );
      })}
    </aside>
  );
}
