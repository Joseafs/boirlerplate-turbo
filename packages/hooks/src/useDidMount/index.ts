import { useEffect, useRef } from "react";
import type { EffectCallback } from "react";

// Roda uma vez, quando o componente monta. Pode devolver uma função de limpeza.
// Usa o callback da primeira renderização, por isso não precisa de lista de dependências.
export const useDidMount = (callback: EffectCallback) => {
  const first = useRef(callback);

  useEffect(() => first.current(), []);
};
