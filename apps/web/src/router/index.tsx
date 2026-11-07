import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { TemplateSystem } from "~/components/TemplateSystem";
import { Home } from "~/pages/Home";

export const routes: RouteObject[] = [
  {
    children: [{ element: <Home />, path: "/" }],
    element: <TemplateSystem />,
  },
];

export const router = createBrowserRouter(routes);
