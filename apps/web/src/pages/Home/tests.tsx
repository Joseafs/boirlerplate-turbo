import { ThemeProvider } from "@repo/ui-base/components/theme-provider";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { App } from "./index";

const renderApp = () =>
  render(
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>,
  );

describe("App", () => {
  it("should render the page title", () => {
    renderApp();

    expect(
      screen.getByRole("heading", { name: "Boilerplate Turbo" }),
    ).toBeInTheDocument();
  });

  it("should show the ready status after clicking the button", async () => {
    renderApp();

    expect(screen.queryByRole("status")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Testar UI" }));

    expect(screen.getByRole("status")).toHaveTextContent("Tudo pronto!");
  });

  it("should offer the theme toggle", () => {
    renderApp();

    expect(
      screen.getByRole("button", { name: "Tema: Claro" }),
    ).toBeInTheDocument();
  });
});
