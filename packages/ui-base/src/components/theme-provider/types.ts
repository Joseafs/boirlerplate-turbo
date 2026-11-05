import type { ReactNode } from "react";

export type Theme = "dark" | "light" | "system";

export interface ThemeContextValue {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}
