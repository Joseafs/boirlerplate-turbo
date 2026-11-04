import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./index";

describe("Button", () => {
  it("should render its children as the accessible name", () => {
    render(<Button>Salvar</Button>);

    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("should not submit forms by default", () => {
    render(<Button>Salvar</Button>);

    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
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
});
