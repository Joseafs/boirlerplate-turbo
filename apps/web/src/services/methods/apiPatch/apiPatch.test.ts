import { AxiosError } from "axios";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { apiPatch } from "./index";

const patch = vi.hoisted(() => vi.fn());

vi.mock("~/services/config", () => ({ api: { patch } }));

describe("apiPatch", () => {
  beforeEach(() => {
    patch.mockReset();
  });

  it("should send the body and return only the response data", async () => {
    patch.mockResolvedValue({ data: { id: 1 } });

    await expect(
      apiPatch<{ id: number }>("/users", { name: "Ana" }),
    ).resolves.toEqual({
      id: 1,
    });

    expect(patch).toHaveBeenCalledWith("/users", { name: "Ana" });
  });

  it("should throw a handled error when the request fails", async () => {
    patch.mockRejectedValue(new AxiosError("Network Error"));

    await expect(apiPatch("/users", {})).rejects.toThrow("Network Error");
  });
});
