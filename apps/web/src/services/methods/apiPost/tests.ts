import { AxiosError } from "axios";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { apiPost } from "./index";

const post = vi.hoisted(() => vi.fn());

vi.mock("~/services/config", () => ({ api: { post } }));

describe("apiPost", () => {
  beforeEach(() => {
    post.mockReset();
  });

  it("should send the body and return only the response data", async () => {
    post.mockResolvedValue({ data: { id: 1 } });

    await expect(
      apiPost<{ id: number }>("/users", { name: "Ana" }),
    ).resolves.toEqual({
      id: 1,
    });

    expect(post).toHaveBeenCalledWith("/users", { name: "Ana" });
  });

  it("should throw a handled error when the request fails", async () => {
    post.mockRejectedValue(new AxiosError("Network Error"));

    await expect(apiPost("/users", {})).rejects.toThrow("Network Error");
  });
});
