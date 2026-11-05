import { AxiosError } from "axios";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { apiDelete } from "./index";

const del = vi.hoisted(() => vi.fn());

vi.mock("~/services/config", () => ({ api: { delete: del } }));

describe("apiDelete", () => {
  beforeEach(() => {
    del.mockReset();
  });

  it("should call delete with the url and return the response data", async () => {
    del.mockResolvedValue({ data: { ok: true } });

    await expect(apiDelete<{ ok: boolean }>("/users/1")).resolves.toEqual({
      ok: true,
    });

    expect(del).toHaveBeenCalledWith("/users/1");
  });

  it("should throw a handled error when the request fails", async () => {
    del.mockRejectedValue(new AxiosError("Network Error"));

    await expect(apiDelete("/users/1")).rejects.toThrow("Network Error");
  });
});
