import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useSelect } from "./index";

describe("useSelect", () => {
  it("should start with nothing selected by default", () => {
    const { result } = renderHook(() => useSelect<string>());

    expect(result.current.selected).toBeNull();
  });

  it("should start with the given initial item", () => {
    const { result } = renderHook(() => useSelect("a"));

    expect(result.current.selected).toBe("a");
  });

  it("should select an item and replace the previous one", () => {
    const { result } = renderHook(() => useSelect<string>());

    act(() => result.current.select("a"));

    act(() => result.current.select("b"));

    expect(result.current.selected).toBe("b");
  });

  it("should tell whether an item is the selected one", () => {
    const { result } = renderHook(() => useSelect<string>());

    act(() => result.current.select("a"));

    expect(result.current.isSelected("a")).toBe(true);

    expect(result.current.isSelected("b")).toBe(false);
  });

  it("should clear the selection", () => {
    const { result } = renderHook(() => useSelect("a"));

    act(() => result.current.clear());

    expect(result.current.selected).toBeNull();
  });
});
