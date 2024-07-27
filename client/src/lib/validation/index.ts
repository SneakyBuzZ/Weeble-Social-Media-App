import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(4, { message: "name must be atleast 4 characters" }),
  username: z
    .string()
    .min(4, { message: "username must be atleast 4 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

export const CreatePostValidation = z.object({
  caption: z.string().min(6).max(2200),
  imageUrl: z.custom<File[]>(),
  location: z.string(),
  tags: z.string(),
});
