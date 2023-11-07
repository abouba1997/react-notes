import { useContext } from "react";
import { ThemeContextProps } from "../contexts/ThemeContext/ThemeContext.type";
import { ThemeContext } from "../contexts/ThemeContext";

const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("Theme not defined within this scope.");
  }

  return context;
};

export default useTheme;
