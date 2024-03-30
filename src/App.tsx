import { Routes, Route } from "react-router-dom";
import { HomePage } from "./_root/pages";
import { SigninForm, SignupForm } from "./_auth/forms";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  const [theme, settheme] = useState("light");

  const darkmode = () => {
    settheme("dark");
  };

  const lightmode = () => {
    settheme("light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, darkmode, lightmode }}>
      <main className="flex h-screen">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route>

          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
