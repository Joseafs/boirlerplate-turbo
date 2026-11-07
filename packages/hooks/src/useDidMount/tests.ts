import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useDidMount } from "./index";

describe("useDidMount", () => {
  it("should call the callback once on mount", () => {
    const callback = vi.fn();
    const { rerender } = renderHook(() => useDidMount(callback));

    rerender();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should call the cleanup on unmount", () => {
    const cleanup = vi.fn();
    const { unmount } = renderHook(() => useDidMount(() => cleanup));

    expect(cleanup).not.toHaveBeenCalled();

    unmount();

    expect(cleanup).toHaveBeenCalledTimes(1);
  });
});
