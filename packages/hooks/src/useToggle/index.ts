import { useState } from "react";

export const useToggle = (initial = false) => {
  const [on, setOn] = useState(initial);

  const toggle = () => setOn(current => !current);

  return [on, toggle, setOn] as const;
};
