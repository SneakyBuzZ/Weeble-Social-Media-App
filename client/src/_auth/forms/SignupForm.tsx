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

import { useToast } from "@/components/ui/use-toast";
// import {
//   useCreateUserAccountMutation,
//   useSignInAccountMutation,
// } from "@/lib/react-query/queriesAndMutations";

function SignupForm() {
  const navigate = useNavigate();

  // const { checkAuthUser, isLoading: isUserLoading } = useAuthContext();

  // const { mutateAsync: createUserAccount, isPending: isCreatingUser } =
  //   useCreateUserAccountMutation();

  // const { mutateAsync: signInAccount, isPending: isSignInUser } =
  //   useSignInAccountMutation();

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
    // const newUser = await createUserAccount(values);
    // if (newUser) console.log("new user ", newUser);
    // if (!newUser) {
    //   return toast({
    //     title: "Sign-up failed! Please try again.",
    //   });
    // }

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

    //   navigate("/sign-in");
    // } else {
    //   return toast({ title: "User has not logged-in" });
    // }
    if (values) null;
  }

  return (
    <>
      <Form {...form}>
        <div className="flex flex-col item-center justify-center w-full lg:w-8/12">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col gap-3 bg-[#131313] rounded-xl items-center justify-center w-11/12"
          >
            <h1 className="text-[#9C9C9C] text-3xl mt-10">Register</h1>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="name"
                      className="bg-[#0B0B0B] border-none my-[2px] px-5"
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
                      className="bg-[#0B0B0B] border-none my-[2px] px-5"
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
                      className="bg-[#0B0B0B] border-none my-[2px] px-5"
                      type="email"
                      // className="bg-white dark:bg-opacity-5 opacity-60 border-none my-[2px] px-5 h-8 md:h-10 w-52 md:w-full"
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
                      className="bg-[#0B0B0B] border-none my-[2px] px-5 w-full"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="bg-[#222222] text-[#FF5E98] mb-10">
              Sign-up
              {/* {isCreatingUser ? <Loader /> : "Sign-up"} */}
            </Button>
          </form>
        </div>
      </Form>
    </>
  );
}

export default SignupForm;
