import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRouter from "./AppRoutes.jsx";
import ReactQueryProvider from "@/components/ReactQueryProvider.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <ReactQueryProvider>
    <StrictMode>
      <AppRouter />
    </StrictMode>
  </ReactQueryProvider>
);
