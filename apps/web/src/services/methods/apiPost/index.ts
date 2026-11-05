import { api } from "~/services/config";
import { handleError } from "~/services/config/error";

export const apiPost = async <Response, Body = unknown>(
  url: string,
  body: Body,
) => {
  try {
    const { data } = await api.post<Response>(url, body);

    return data;
  } catch (e) {
    throw handleError(e);
  }
};
