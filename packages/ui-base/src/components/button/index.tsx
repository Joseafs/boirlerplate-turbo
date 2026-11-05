import type { FC } from "react";

import { Slot } from "radix-ui";

import { cn } from "@repo/ui-base/lib/utils";

import type { ButtonProps } from "./types";
import { buttonVariants } from "./variants";

export const Button: FC<ButtonProps> = ({
  asChild = false,
  className,
  size = "default",
  variant = "default",
  ...props
}) => {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      className={cn(buttonVariants({ className, size, variant }))}
      data-size={size}
      data-slot="button"
      data-variant={variant}
      {...props}
    />
  );
};

export { buttonVariants };
