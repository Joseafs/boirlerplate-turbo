import { AxiosError } from "axios";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { apiGet } from "./index";

const get = vi.hoisted(() => vi.fn());

vi.mock("~/services/config", () => ({ api: { get } }));

describe("apiGet", () => {
  beforeEach(() => {
    get.mockReset();
  });

  it("should return only the response data", async () => {
    get.mockResolvedValue({ data: [{ id: 1 }] });

    await expect(apiGet<{ id: number }[]>("/users")).resolves.toEqual([
      { id: 1 },
    ]);

    expect(get).toHaveBeenCalledWith("/users");
  });

  it("should throw a handled error when the request fails", async () => {
    get.mockRejectedValue(new AxiosError("Network Error"));

    await expect(apiGet("/users")).rejects.toThrow("Network Error");
  });
});
