import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useToggle } from "./index";

describe("useToggle", () => {
  it("should start off by default", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);
  });

  it("should start with the given initial value", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
  });

  it("should flip the value on toggle", () => {
    const { result } = renderHook(() => useToggle());

    act(() => result.current[1]());

    expect(result.current[0]).toBe(true);

    act(() => result.current[1]());

    expect(result.current[0]).toBe(false);
  });

  it("should allow setting the value directly", () => {
    const { result } = renderHook(() => useToggle());

    act(() => result.current[2](true));

    expect(result.current[0]).toBe(true);
  });
});
