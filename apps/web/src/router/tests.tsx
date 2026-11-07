import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { routes } from "./index";

const renderAt = (path: string) =>
  render(
    <RouterProvider
      router={createMemoryRouter(routes, { initialEntries: [path] })}
    />,
  );

describe("router", () => {
  it("should render the home page at /", () => {
    renderAt("/");

    expect(
      screen.getByRole("heading", { name: "Boilerplate Turbo" }),
    ).toBeInTheDocument();
  });
});
