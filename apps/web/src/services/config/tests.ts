import { AxiosError } from "axios";
import type { AxiosResponse } from "axios";
import { describe, expect, it } from "vitest";

import { handleError } from "./error";

describe("handleError", () => {
  it("should use the response status text for axios errors", () => {
    const response = { status: 404, statusText: "Not Found" } as AxiosResponse;

    const error = new AxiosError(
      "Request failed",
      "ERR_BAD_REQUEST",
      undefined,
      undefined,
      response,
    );

    expect(handleError(error).message).toBe("Not Found");
  });

  it("should fall back to the axios message without a response", () => {
    expect(handleError(new AxiosError("Network Error")).message).toBe(
      "Network Error",
    );
  });

  it("should return a generic message for unknown errors", () => {
    expect(handleError("boom").message).toBe("Erro inesperado");
  });
});
