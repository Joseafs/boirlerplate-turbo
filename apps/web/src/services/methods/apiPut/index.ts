import { api } from "~/services/config";
import { handleError } from "~/services/config/error";

export const apiPut = async <Response, Body = unknown>(
  url: string,
  body: Body,
) => {
  try {
    const { data } = await api.put<Response>(url, body);

    return data;
  } catch (e) {
    throw handleError(e);
  }
};
