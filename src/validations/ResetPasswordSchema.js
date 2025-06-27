import { z } from "zod";
import { emailSchema, passwordSchema } from "./RegisterSchema";

export const ResetPasswordSchema = z
  .object({
    email: emailSchema,
    newPassword: passwordSchema,
    otp: z.string().length(6, { message: "OTP length must be 6 characters long" }),
    cpassword: z.string(),
  })
  .refine((data) => data.newPassword === data.cpassword, {
    message: "Passwords do not match",
    path: ["cpassword"],
  });
