import { AxiosError } from "axios";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { apiPut } from "./index";

const put = vi.hoisted(() => vi.fn());

vi.mock("~/services/config", () => ({ api: { put } }));

describe("apiPut", () => {
  beforeEach(() => {
    put.mockReset();
  });

  it("should send the body and return only the response data", async () => {
    put.mockResolvedValue({ data: { id: 1 } });

    await expect(
      apiPut<{ id: number }>("/users", { name: "Ana" }),
    ).resolves.toEqual({
      id: 1,
    });

    expect(put).toHaveBeenCalledWith("/users", { name: "Ana" });
  });

  it("should throw a handled error when the request fails", async () => {
    put.mockRejectedValue(new AxiosError("Network Error"));

    await expect(apiPut("/users", {})).rejects.toThrow("Network Error");
  });
});
