import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { SignupValidation } from "@/lib/validation"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Loader from "@/components/shared/Loader"


 


function SignupForm() {

  const isLoader = false;

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name:"",
      username: "",
      email : "",
      password : "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>
    <img className="mt-24 opacity-50 md:opacity-100 h-screen" src="/gradient.png" alt="gradient" />
    <Form  {...form}>
      <div className="fixed inset-0  flex-center flex-col item-center w-screen md:w-full lg:w-1/2">
        
        <h1 className="h1-kaushik w-full text-center playball-regular purple-to-pink">Weeble</h1>
        
        <h1 className="small-regular text-gray-light w-72 md:w-96 text-center my-3 ">Elevate Your Story: Welcome to Weeble, Where Moments Shine Brighter.</h1>

        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-3 bg-gray-300 md:bg-[#00000033] my-3 rounded-xl bg-opacity-5 md:bg-opacity-60 px-14 py-10 items-center">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="name" className="bg-black bg-opacity-15 border-none my-[2px]  px-5" type="text"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="username" className="bg-black bg-opacity-15 border-none my-[2px] px-5" type="text"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="email" className="bg-black bg-opacity-15 border-none my-[2px] px-5" type="email"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="password" className="bg-black bg-opacity-15 border-none my-[2px] px-5" type="password"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            />

          <Button type="submit" className="bg-gradient-to-r from-indigo-500 via-pink-500 to-rose-500 w-full">
            {isLoader? (
              <Loader/> 
            ):"Sign-up"}
          </Button>
          
        </form>

        <h1 className="small-regular md:text-md text-gray-light"> ---- Already have an account? ----</h1>
        <Link className="text-md text-pink-300 mt-1" to="/sign-in">Login!</Link>
      </div>
    </Form>
    </>
  )
}

export default SignupForm
