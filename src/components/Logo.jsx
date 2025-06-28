import { Link } from "react-router";

import { useTheme } from "./ThemeProvider";

import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link to="/">
      <img
        alt="logo"
        className="max-h-6"
        src={theme === "dark" ? logoDark : logoLight}
      />
    </Link>
  );
}
