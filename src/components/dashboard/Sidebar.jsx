import { Link } from "react-router";
import { BookOpen, FileText, Users, Home, Globe, HelpCircle } from "lucide-react"; 

const links = [
  { to: "/", label: "Website", icon: Globe },
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/dashboard/lessons", label: "Lessons", icon: BookOpen },
  { to: "/dashboard/exams", label: "Exams", icon: FileText },
  { to: "/dashboard/students", label: "Students", icon: Users },
  { to: "/dashboard/questions", label: "Questions", icon: HelpCircle }, 
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border shadow-sm p-4 space-y-2">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
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
    </aside>
  );
}
