import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./index";

describe("Button", () => {
  it("should render its children as the accessible name", () => {
    render(<Button>Salvar</Button>);

    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("should call onClick when clicked", async () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Salvar</Button>);

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick when disabled", async () => {
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Salvar
      </Button>,
    );

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should render the child element when asChild is set", () => {
    render(
      <Button asChild>
        <a href="/home">Início</a>
      </Button>,
    );

    expect(screen.getByRole("link", { name: "Início" })).toHaveAttribute(
      "href",
      "/home",
    );
  });
});
