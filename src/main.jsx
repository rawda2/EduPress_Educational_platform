import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "@/AppRoutes.jsx";
import ThemeProvider from "@/components/ThemeProvider.jsx";
import ReactQueryProvider from "@/components/ReactQueryProvider.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ReactQueryProvider>
      <StrictMode>
        <AppRouter />
      </StrictMode>
    </ReactQueryProvider>
  </ThemeProvider>
);
