import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "./index";

describe("Label", () => {
  it("should label the input it points to", () => {
    render(
      <>
        <Label htmlFor="name">Nome</Label>
        <input id="name" />
      </>,
    );

    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
  });

  it("should merge the given className", () => {
    render(<Label className="custom">Nome</Label>);

    expect(screen.getByText("Nome")).toHaveClass("custom");
  });
});
