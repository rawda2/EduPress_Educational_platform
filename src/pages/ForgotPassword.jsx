import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { emailSchema } from "@/validations/RegisterSchema";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SubmitBtn from "@/components/SubmitBtn";
import { useState } from "react";
import { ResetPasswordSchema } from "@/validations/ResetPasswordSchema";
import LoginSuccess from "./LoginSuccess";
import { Eye, EyeOff } from "lucide-react";
import { forgotPassword, resetPassword } from "@/services/AuthAPI";

export default function ForgotPassword() {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [actionSuccess, setActionSuccess] = useState(false);
  // toggle the password visibility
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(
      showResetPassword ? ResetPasswordSchema : ForgotPasswordSchema
    ),
    defaultValues: showResetPassword
      ? { email: "", newPassword: "", otp: "", cpassword: "" }
      : { email: "" },
  });

  // handle forgot password submission
  const handleForgotPassword = async (data) => {
    await forgotPassword(data, form, setShowResetPassword);
  };

  // handle reset password submission
  const handleResetPassword = async (data) => {
    await resetPassword(setActionSuccess, data, form);
  };

  // if the user is already logged in, redirect to this page or something id ont fucking know
  if (localStorage.getItem("token")) return <LoginSuccess login={true} />;

  if (actionSuccess) return <LoginSuccess resetPassword={true} />;

  return (
    <Form {...form}>
      <div className="w-[80%] ms-auto mt-20 [&_label]:font-bold [&_label]:text-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Forgot Password</h1>
        {showResetPassword ? (
          <form
            onSubmit={form.handleSubmit(handleResetPassword)}
            className="space-y-6"
          >
            {resetPasswordInputs.map((input) => (
              <FormField
                key={input.name}
                control={form.control}
                name={input.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={input.name}>{input.label}</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          id={input.name}
                          type={
                            input.type === "password" && showPassword
                              ? "text"
                              : input.type
                          }
                          placeholder={input.placeholder}
                          className="auth-input"
                          {...field}
                        />
                      </FormControl>
                      {input.type === "password" && (
                        <button
                          onClick={() => setShowPassword((prev) => !prev)}
                          type="button"
                          className="input-icon"
                        >
                          {showPassword ? <Eye /> : <EyeOff />}
                        </button>
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <SubmitBtn disabled={form.formState.isSubmitting}>
              Reset Password
            </SubmitBtn>
          </form>
        ) : (
          <>
            <form
              onSubmit={form.handleSubmit(handleForgotPassword)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="auth-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitBtn disabled={form.formState.isSubmitting}>
                Send Reset Link
              </SubmitBtn>
            </form>
            <button
              className="!mt-4 underline cursor-pointer"
              onClick={() => setShowResetPassword(true)}
            >
              you got the OTP code?
            </button>
          </>
        )}
      </div>
      <div className="h-dvh">
        <img
          src="/login.jpg"
          alt="Description of image"
          className="object-cover h-full w-full"
        />
      </div>
    </Form>
  );
}

const ForgotPasswordSchema = z.object({
  email: emailSchema,
});

const resetPasswordInputs = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "newPassword",
    type: "password",
    label: "New Password",
    placeholder: "Enter new password",
  },
  {
    name: "cpassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Confirm new password",
  },
  {
    name: "otp",
    type: "text",
    label: "OTP",
    placeholder: "Enter OTP",
  },
];
