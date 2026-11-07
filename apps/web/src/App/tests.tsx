import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./index";

describe("App", () => {
  it("should render the router with the home page", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Boilerplate Turbo" }),
    ).toBeInTheDocument();
  });
});
