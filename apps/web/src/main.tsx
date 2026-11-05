import { StrictMode } from "react";

import { ThemeProvider } from "@repo/ui-base/components/theme-provider";
import { createRoot } from "react-dom/client";

import { App } from "~/App";

import "@repo/ui-base/globals.css";

const root = document.getElementById("root");

if (!root) throw new Error("Elemento #root não encontrado");

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
