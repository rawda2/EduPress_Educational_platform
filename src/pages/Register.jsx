import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/validations/RegisterSchema";
import { Form } from "@/components/ui/form";
import { useState } from "react";

import { registerUser } from "@/services/AuthAPI";
import { RegisterFormInputs } from "@/features/auth/RegisterForm";

export default function Register() {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues,
  });

  // toggle the password visibility
  const [showPassword, setShowPassword] = useState(false);

  // on submit handler
  const onSubmit = async (data) => {
    const { fn, ln, ...rest } = data;
    const userData = {
      ...rest,
      fullName: `${fn} ${ln}`,
    };

    await registerUser(userData, form);
  };

  return (
    <Form {...form}>
      <div className="max-lg:col-span-2 space-y-20 w-[80%] mx-auto flex flex-col justify-center">
        <h1 className="lg:text-3xl text-xl text-center font-bold">
          Create your account
        </h1>
        <form
          className="flex flex-col w-full gap-6 [&_label]:font-bold [&_label]:text-lg"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <RegisterFormInputs {...{ form, showPassword, setShowPassword }} />
        </form>
      </div>
    </Form>
  );
}

const defaultValues = {
  fn: "",
  ln: "",
  email: "",
  password: "",
  cpassword: "",
  phoneNumber: "",
};
