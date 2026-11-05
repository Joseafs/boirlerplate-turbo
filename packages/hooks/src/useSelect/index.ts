import { useState } from "react";

export const useSelect = <T>(initial: T | null = null) => {
  const [selected, setSelected] = useState<T | null>(initial);

  const select = (item: T) => setSelected(item);
  const clear = () => setSelected(null);
  const isSelected = (item: T) => selected === item;

  return { clear, isSelected, select, selected };
};
