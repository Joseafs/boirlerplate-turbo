import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Card, CardContent, CardHeader, CardTitle } from "./index";

describe("Card", () => {
  it("should render its sections", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Título</CardTitle>
        </CardHeader>
        <CardContent>Conteúdo</CardContent>
      </Card>,
    );

    expect(screen.getByText("Título")).toBeInTheDocument();

    expect(screen.getByText("Conteúdo")).toBeInTheDocument();
  });

  it("should merge the given className", () => {
    render(<Card className="custom">Conteúdo</Card>);

    expect(screen.getByText("Conteúdo")).toHaveClass("custom");
  });
});
