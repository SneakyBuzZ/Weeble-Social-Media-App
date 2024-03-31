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

import { SignupValidation } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loader from "@/components/shared/Loader";
import ThemeSwitcher from "@/components/shared/ThemeSwitcher";

import { useToast } from "@/components/ui/use-toast";
import {
  useCreateUserAccountMutation,
  useSignInAccountMutation,
} from "@/lib/react-query/queriesAndMutations";
import { useAuthContext } from "@/contexts/AuthContext";

function SignupForm() {
  const navigate = useNavigate();

  const { checkAuthUser, isLoading: isUserLoading } = useAuthContext();

  const { mutateAsync: createUserAccount, isPending: isCreatingUser } =
    useCreateUserAccountMutation();

  const { mutateAsync: signInAccount, isPending: isSignInUser } =
    useSignInAccountMutation();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);
    if (!newUser) {
      return toast({
        title: "Sign-up failed! Please try again.",
      });
    }

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      return toast({ title: "Sign-in failed! Please try again." });
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();

      navigate("/");
    } else {
      console.log(isLoggedIn);
      return toast({ title: "User has not logged-in" });
    }
  }

  return (
    <>
      <div className="form size-full flex justify-center items-center">
        <Form {...form}>
          <div className="flex-center flex-col item-center w-screen md:w-full">
            <ThemeSwitcher>
              <h1 className="h1-kaushik w-36 text-center playball-regular purple-to-pink">
                Weeble
              </h1>
            </ThemeSwitcher>

            <h1 className="small-regular text-gray-light w-72 md:w-96 text-center my-3">
              Elevate Your Story: Welcome to Weeble, Where Moments Shine
              Brighter.
            </h1>

            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" flex flex-col gap-3  dark:bg-[#000]/30 bg-[#ffffff]/50 backdrop-blur my-3 rounded-xl  px-14 py-10 items-center size-72 md:size-auto justify-center"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="name"
                        className="bg-white dark:bg-opacity-5 opacity-60 border-none my-[2px]  px-5 h-8 md:h-10 w-52 md:w-full "
                        type="text"
                        {...field}
                      />
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
                      <Input
                        placeholder="username"
                        className="bg-white dark:bg-opacity-5 opacity-60 border-none my-[2px] px-5 h-8 md:h-10 w-52 md:w-full"
                        type="text"
                        {...field}
                      />
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
                      <Input
                        placeholder="email"
                        className="bg-white dark:bg-opacity-5 opacity-60 border-none my-[2px] px-5 h-8 md:h-10 w-52 md:w-full"
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
                        className="bg-white dark:bg-opacity-5 opacity-60 border-none my-[2px] px-5 h-8 md:h-10 w-52 md:w-full"
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
                className="bg-gradient-to-r from-indigo-500 via-pink-500 to-rose-500 text-[#feeaea] h-8 md:h-10 w-24 md:w-full"
              >
                {isCreatingUser ? <Loader /> : "Sign-up"}
              </Button>
            </form>

            <h1 className="small-regular md:text-md text-gray-light">
              {" "}
              ---- Already have an account? ----
            </h1>
            <Link
              className="text-md dark:text-purple-300 text-purple-600  mt-1"
              to="/sign-in"
            >
              Login!
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignupForm;
