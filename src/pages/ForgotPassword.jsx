import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import LoginSuccess from "./LoginSuccess";
import { Input } from "@/components/ui/input";

import { forgotPassword, resetPassword } from "@/services/AuthAPI";

import { emailSchema } from "@/validations/RegisterSchema";
import { ResetPasswordSchema } from "@/validations/ResetPasswordSchema";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";

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
    <div className="max-lg:col-span-2 w-[80%] mx-auto [&_label]:font-bold [&_label]:text-lg flex flex-col justify-center">
      <h1 className="lg:text-3xl text-xl font-bold mb-8 text-center">
        Forgot Password
      </h1>

      <Form {...form}>
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

            <LoadingButton
              className="w-full"
              loading={form.formState.isSubmitting}
            >
              Reset Password
            </LoadingButton>
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

              <LoadingButton
                className="w-full"
                loading={form.formState.isSubmitting}
              >
                Send Reset Link
              </LoadingButton>
            </form>
            <Button
              variant="link"
              className="!mt-4"
              onClick={() => setShowResetPassword(true)}
            >
              I got the OTP code?
            </Button>
          </>
        )}
      </Form>
    </div>
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
