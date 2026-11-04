import type { FC } from "react";

import type { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  ...props
}) => (
  <button type={type} {...props}>
    {children}
  </button>
);
