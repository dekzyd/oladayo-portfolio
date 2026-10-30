"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    const hasSavedTheme = savedTheme === "light" || savedTheme === "dark";

    function applyTheme(nextTheme: Theme) {
      document.documentElement.dataset.theme = nextTheme;
      setTheme(nextTheme);
    }

    // Use the saved preference, or fall back to the system preference.
    applyTheme(
      hasSavedTheme ? savedTheme : prefersDark.matches ? "dark" : "light",
    );

    // Follow system changes until the user chooses a theme manually.
    function handleSystemChange(event: MediaQueryListEvent) {
      applyTheme(event.matches ? "dark" : "light");
    }

    if (!hasSavedTheme) {
      prefersDark.addEventListener("change", handleSystemChange);
    }

    return () => {
      prefersDark.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.dataset.theme = nextTheme;

      try {
        localStorage.setItem("portfolio-theme", nextTheme);
      } catch {
        // Theme switching still works if localStorage is unavailable.
      }

      return nextTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
