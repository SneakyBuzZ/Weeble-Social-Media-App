import { useContext } from "react";
import { createContext } from "react";

export const themeContext = createContext({
  theme: "light",
  darkmode: () => {},
  lightmode: () => {},
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
  return useContext(themeContext);
}
