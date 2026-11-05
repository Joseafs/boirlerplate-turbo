import { createContext, useContext, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

export type Theme = "dark" | "light" | "system";

interface ThemeContextValue {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

const THEMES: readonly Theme[] = ["dark", "light", "system"];
const DARK_QUERY = "(prefers-color-scheme: dark)";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const readStoredTheme = (storageKey: string, fallback: Theme): Theme => {
  const stored = localStorage.getItem(storageKey);

  return THEMES.find(theme => theme === stored) ?? fallback;
};

const resolveTheme = (theme: Theme) => {
  if (theme !== "system") return theme;

  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  root.classList.remove("light", "dark");

  root.classList.add(resolveTheme(theme));
};

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}) => {
  const [theme, setThemeState] = useState<Theme>(() =>
    readStoredTheme(storageKey, defaultTheme),
  );

  useEffect(() => {
    applyTheme(theme);

    if (theme !== "system") return;

    const media = window.matchMedia(DARK_QUERY);
    const onChange = () => applyTheme("system");

    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = (next: Theme) => {
    localStorage.setItem(storageKey, next);

    setThemeState(next);
  };

  return <ThemeContext value={{ setTheme, theme }}>{children}</ThemeContext>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme deve ser usado dentro do ThemeProvider");

  return context;
};
