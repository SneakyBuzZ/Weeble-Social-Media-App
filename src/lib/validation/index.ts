import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(4,{message: "name must be atleast 4 characters"}),
    username: z.string().min(4,{message: "username must be atleast 4 characters"}),
    email: z.string().email(),
    password : z.string().min(8,{message: "Password must be atleast 8 characters"})
  })