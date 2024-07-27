import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { SigninValidation } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loader from "@/components/shared/Loader";

import { useToast } from "@/components/ui/use-toast";
// import { useSignInAccountMutation } from "@/lib/react-query/queriesAndMutations";
// import { useAuthContext } from "@/contexts/AuthContext";

function SigninForm() {
  const navigate = useNavigate();

  // const { checkAuthUser, isLoading: isUserLoading } = useAuthContext();

  // const { mutateAsync: signInAccount } = useSignInAccountMutation();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    // const session = await signInAccount({
    //   email: values.email,
    //   password: values.password,
    // });
    // if (!session) {
    //   return toast({ title: "Sign-in failed! Please try again." });
    // }

    // const isLoggedIn = await checkAuthUser();

    // if (isLoggedIn) {
    //   form.reset();

    //   navigate("/");
    // } else {
    //   return toast({ title: "User has not logged-in" });
    // }
    if (values) null;
  }

  return (
    <>
      <div className="form size-full flex justify-center items-center">
        <Form {...form}>
          <div className="flex-center flex-col item-center w-screen md:w-full">
            <h1 className="h1-kaushik w-50 text-center playball-regular purple-to-pink">
              Weeble
            </h1>

            <h1 className="small-regular text-gray-light w-72 md:w-96 text-center my-3">
              Welcome back! Enter your details.
            </h1>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" flex flex-col gap-3  dark:bg-[#ffffff40]/5 bg-[#ffffff]/40 backdrop-blur-md my-3 rounded-xl py-10  items-center size-64 md:size-auto md:w-80 justify-center pb-10 md:pb-20"
            >
              <h1 className="small-regular dakr:text-gray-900 text-gray-500 w-72 md:w-96 text-center my-3">
                Login to your account!
              </h1>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="email"
                        className="dark:bg-black/10 bg-white/50 border-none my-[2px] h-8 md:h-10 w-52 md:w-56"
                        type="email"
                        {...field}
                      />
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
                      <Input
                        placeholder="password"
                        className="dark:bg-black/10 bg-white/50 border-none my-[2px] h-8 md:h-10 w-52 md:w-56"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 via-pink-500 to-rose-500 text-[#feeaea] h-8 md:h-10 w-52 md:w-56 mb-5 md:mb-0"
              >
                {/* {isUserLoading ? <Loader /> : "Sign-in"} */}
              </Button>
            </form>

            <h1 className="small-regular md:text-md text-gray-light mt-4">
              {" "}
              ---- Don't have an account? ----
            </h1>
            <Link
              className="text-md dark:text-purple-300 text-purple-600  mt-1"
              to="/sign-up"
            >
              Sign-up!
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default SigninForm;
