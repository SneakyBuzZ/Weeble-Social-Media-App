import useTheme from "@/contexts/themeContext";

type ThemeSwitcherProps = {
  children: React.ReactNode;
};

function ThemeSwitcher({ children }: ThemeSwitcherProps) {
  const { theme, darkmode, lightmode } = useTheme();

  const themeChange = () => {
    if (theme === "light") darkmode();
    else lightmode();
  };
  return (
    <button className="" onClick={() => themeChange()}>
      {children}
    </button>
  );
}

export default ThemeSwitcher;
