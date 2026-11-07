import type { FC } from "react";

import { Button } from "@repo/ui-base/components/button";
import { useTheme } from "@repo/ui-base/components/theme-provider";
import type { Theme } from "@repo/ui-base/components/theme-provider";

const NEXT_THEME: Record<Theme, Theme> = {
  dark: "system",
  light: "dark",
  system: "light",
};

const LABEL: Record<Theme, string> = {
  dark: "Escuro",
  light: "Claro",
  system: "Sistema",
};

export const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button variant="outline" onClick={() => setTheme(NEXT_THEME[theme])}>
      Tema: {LABEL[theme]}
    </Button>
  );
};
