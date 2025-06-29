import { Link } from "react-router";

import Logo from "./Logo";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  // { title: "Blog", href: "/blog" },
  { title: "Lessons", href: "/lessons" },
  { title: "Exams", href: "/exams" },
  // { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-4 *:flex-1 min-w-3xs">
        <div className="space-y-2">
          <Logo />
          <p className="pt-4 text-sm text-muted-foreground">
            e-learning Platform is a web application that provides access to
            lessons and exams, a tool for learning and evaluating knowledge.
          </p>
        </div>

        <div className="md:mx-auto">
          <h3 className="pb-2 text-lg font-semibold">Links</h3>
          <ul className="space-y-1">
            {links.map(({ title, href }) => (
              <li key={href} className="text-sm text-muted-foreground">
                <Link to={href} className="hover:underline hover:text-primary">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="pb-2 text-lg font-semibold">Contact</h3>
          <address className="not-italic text-sm space-y-1 text-muted-foreground">
            <div>
              <span>Address: </span>
              <span>1234 Street Name, City, State, Zip</span>
            </div>
            <div>
              <span>Email: </span>
              <a href="mailto:LHc4o@example.com">LHc4o@example.com</a>
            </div>
            <div>
              <span>Phone: </span>
              <span>+(123) 456-7890</span>
            </div>
          </address>
        </div>
      </div>

      <p className="text-center border-t p-4 mt-2 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}
