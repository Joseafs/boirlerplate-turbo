import { api } from "~/services/config";
import { handleError } from "~/services/config/error";

export const apiDelete = async <Response = void>(url: string) => {
  try {
    const { data } = await api.delete<Response>(url);

    return data;
  } catch (e) {
    throw handleError(e);
  }
};
