import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  // Initialize state based on localStorage
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark"); // apply immediately
    } else {
      document.documentElement.classList.remove("dark");
    }
    return stored === "dark";
  });

  // Toggle dark mode
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
