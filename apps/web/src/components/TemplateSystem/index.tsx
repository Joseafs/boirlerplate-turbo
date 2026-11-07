import type { FC } from "react";

import { ThemeProvider } from "@repo/ui-base/components/theme-provider";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const TemplateSystem: FC = () => (
  <ThemeProvider>
    <Outlet />
    <ToastContainer />
  </ThemeProvider>
);
