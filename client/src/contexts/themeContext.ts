import { createContext, useContext } from "react";

export const themeContext = createContext({
  theme: "light",
  darkmode: () => {},
  lightmode: () => {},
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
  return useContext(themeContext);
}
