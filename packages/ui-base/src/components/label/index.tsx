import type { FC } from "react";

import { Label as LabelPrimitive } from "radix-ui";

import { cn } from "@repo/ui-base/lib/utils";

import type { LabelProps } from "./types";

export const Label: FC<LabelProps> = ({ className, ...props }) => (
  <LabelPrimitive.Root
    className={cn(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      className,
    )}
    data-slot="label"
    {...props}
  />
);
