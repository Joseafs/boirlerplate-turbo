import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { App } from "./index";

describe("App", () => {
  it("should render the page title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Boilerplate Turbo" }),
    ).toBeInTheDocument();
  });

  it("should show the ready status after clicking the button", async () => {
    render(<App />);

    expect(screen.queryByRole("status")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Testar UI" }));

    expect(screen.getByRole("status")).toHaveTextContent("Tudo pronto!");
  });
});
