import type { FC, ReactNode } from "react";

import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ThemeProvider, useTheme } from "./theme-provider";

const mockSystemDark = (matches: boolean) => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockReturnValue({
      addEventListener: vi.fn(),
      matches,
      removeEventListener: vi.fn(),
    }),
  );
};

const Probe: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <p>tema: {theme}</p>
      <button onClick={() => setTheme("dark")}>escuro</button>
    </>
  );
};

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe("ThemeProvider", () => {
  beforeEach(() => {
    localStorage.clear();

    document.documentElement.className = "";

    mockSystemDark(false);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should follow the system theme by default", () => {
    mockSystemDark(true);

    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );

    expect(screen.getByText("tema: system")).toBeInTheDocument();

    expect(document.documentElement).toHaveClass("dark");
  });

  it("should use light when the system is light", () => {
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );

    expect(document.documentElement).toHaveClass("light");

    expect(document.documentElement).not.toHaveClass("dark");
  });

  it("should apply and persist the chosen theme", async () => {
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );

    await userEvent.click(screen.getByRole("button", { name: "escuro" }));

    expect(document.documentElement).toHaveClass("dark");

    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("should restore the stored theme", () => {
    localStorage.setItem("theme", "dark");

    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );

    expect(screen.getByText("tema: dark")).toBeInTheDocument();
  });

  it("should ignore an invalid stored value", () => {
    localStorage.setItem("theme", "banana");

    render(
      <ThemeProvider defaultTheme="light">
        <Probe />
      </ThemeProvider>,
    );

    expect(screen.getByText("tema: light")).toBeInTheDocument();
  });

  it("should expose the theme through useTheme", () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toBe("system");
  });

  it("should throw when useTheme is used outside the provider", () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);

    expect(() => renderHook(() => useTheme())).toThrow(
      "useTheme deve ser usado dentro do ThemeProvider",
    );
  });
});
