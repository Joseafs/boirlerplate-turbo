import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Input } from "./index";

describe("Input", () => {
  it("should call onChange when typing", async () => {
    const onChange = vi.fn();

    render(<Input aria-label="Nome" onChange={onChange} />);

    await userEvent.type(screen.getByRole("textbox", { name: "Nome" }), "ab");

    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("should show the value passed as prop", () => {
    render(<Input aria-label="Nome" readOnly value="Ana" />);

    expect(screen.getByRole("textbox", { name: "Nome" })).toHaveValue("Ana");
  });

  it("should forward the type attribute", () => {
    render(<Input aria-label="E-mail" type="email" />);

    expect(screen.getByRole("textbox", { name: "E-mail" })).toHaveAttribute(
      "type",
      "email",
    );
  });

  it("should be disabled when requested", () => {
    render(<Input aria-label="Nome" disabled />);

    expect(screen.getByRole("textbox", { name: "Nome" })).toBeDisabled();
  });
});
