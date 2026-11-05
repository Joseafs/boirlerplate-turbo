import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn", () => {
  it("should join class names and skip falsy values", () => {
    expect(cn("a", false, undefined, "b")).toBe("a b");
  });

  it("should let the last conflicting tailwind class win", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});
