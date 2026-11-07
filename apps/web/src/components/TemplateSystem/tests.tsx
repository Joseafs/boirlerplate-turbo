import { useTheme } from "@repo/ui-base/components/theme-provider";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { TemplateSystem } from "./index";

const Page = () => {
  const { theme } = useTheme();

  return (
    <>
      <p>Conteúdo da página</p>
      <p>Tema: {theme}</p>
    </>
  );
};

const renderTemplate = () => {
  const router = createMemoryRouter([
    {
      children: [{ element: <Page />, path: "/" }],
      element: <TemplateSystem />,
    },
  ]);

  render(<RouterProvider router={router} />);
};

describe("TemplateSystem", () => {
  it("should render the current page through the outlet", () => {
    renderTemplate();

    expect(screen.getByText("Conteúdo da página")).toBeInTheDocument();
  });

  it("should provide the theme to the pages", () => {
    renderTemplate();

    expect(screen.getByText("Tema: system")).toBeInTheDocument();
  });
});
