import { useState, useEffect } from "react";

export function useDarkMode() {
  // define key name
  const THEME_KEY = "mn-bety-theme";
  // dark mode state
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem(THEME_KEY) === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  }, [THEME_KEY, isDark]);

  // handle dark mode
  const toggleDarkMode = () => setIsDark((prev) => !prev);
  return [isDark, toggleDarkMode];
}
