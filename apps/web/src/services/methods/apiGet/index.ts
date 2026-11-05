import { api } from "~/services/config";
import { handleError } from "~/services/config/error";

export const apiGet = async <Response>(url: string) => {
  try {
    const { data } = await api.get<Response>(url);

    return data;
  } catch (e) {
    throw handleError(e);
  }
};
