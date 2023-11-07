import { createContext, useState, useEffect } from "react";
import { Theme, ThemeContextProps } from "./ThemeContext.type";

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("abouba-portofolio-theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("abouba-portofolio-theme", "light");
      document.documentElement.removeAttribute("data-theme");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(
      "abouba-portofolio-theme"
    ) as Theme;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export { ThemeContextProvider };
