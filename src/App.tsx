import { Routes , Route } from "react-router-dom"
import { HomePage } from "./_root/pages"
import { SigninForm,SignupForm } from "./_auth/forms"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"

function App(){
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForm/>}/>
          <Route path="/sign-up" element={<SignupForm/>}/>
        </Route>


      <Route element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
      </Routes>
    </main>
  )
}

export default App
