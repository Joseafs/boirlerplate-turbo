import { ThemeProvider } from "@repo/ui-base/components/theme-provider";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ThemeToggle } from "./index";

const renderToggle = () =>
  render(
    <ThemeProvider defaultTheme="light">
      <ThemeToggle />
    </ThemeProvider>,
  );

describe("ThemeToggle", () => {
  it("should show the current theme", () => {
    renderToggle();

    expect(
      screen.getByRole("button", { name: "Tema: Claro" }),
    ).toBeInTheDocument();
  });

  it("should cycle light, dark and system", async () => {
    renderToggle();

    await userEvent.click(screen.getByRole("button"));

    expect(
      screen.getByRole("button", { name: "Tema: Escuro" }),
    ).toBeInTheDocument();

    expect(document.documentElement).toHaveClass("dark");

    await userEvent.click(screen.getByRole("button"));

    expect(
      screen.getByRole("button", { name: "Tema: Sistema" }),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button"));

    expect(
      screen.getByRole("button", { name: "Tema: Claro" }),
    ).toBeInTheDocument();
  });
});
