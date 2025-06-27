import Logo from "./Logo";
import UserButton from "./UserButton";
import ThemeToggle from "./ThemeToggle";
import { Navbar, MobileNavbar } from "./Navbar";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto py-3 px-4 md:px-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MobileNavbar />
          <Logo />
        </div>
        <Navbar />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
}
