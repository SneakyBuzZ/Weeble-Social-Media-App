import { Routes, Route } from "react-router-dom";
import { HomePage } from "./_root/pages";
import { SigninForm, SignupForm } from "./_auth/forms";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

import { Toaster } from "@/components/ui/toaster";
import ExplorePage from "./_root/pages/ExplorePage";
import SavedPage from "./_root/pages/SavedPage";
import PeoplePage from "./_root/pages/PeoplePage";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/people" element={<PeoplePage />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
