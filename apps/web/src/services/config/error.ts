import { isAxiosError } from "axios";

export const handleError = (e: unknown): Error => {
  if (isAxiosError(e)) return new Error(e.response?.statusText || e.message);

  return new Error("Erro inesperado");
};
