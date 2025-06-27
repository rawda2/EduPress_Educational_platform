import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/validations/RegisterSchema";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import SubmitBtn from "@/components/SubmitBtn";
import { Link } from "react-router";
import { registerUser } from "@/services/AuthAPI";

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
      <div className="max-lg:col-span-2 space-y-20 w-[80%] mx-auto">
        <h1 className="lg:text-3xl text-xl text-center font-bold">Create your account</h1>
        <form
          className="flex flex-col w-full gap-6 [&_label]:font-bold [&_label]:text-lg"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {inputFields.map((field, i) => {
            if (Array.isArray(field)) {
              return (
                <div key={i} className="flex w-full gap-8">
                  {field.map((subField, j) => (
                    <FormField
                      key={j}
                      control={form.control}
                      name={subField.name}
                      render={({ field }) => (
                        <FormItem className="flex flex-col w-full">
                          <FormLabel htmlFor={subField.name}>
                            {subField.label}
                          </FormLabel>
                          <div className="relative">
                            <FormControl>
                              <Input
                                className="auth-input"
                                id={subField.name}
                                type={
                                  subField.type === "password" && showPassword
                                    ? "text"
                                    : subField.type
                                }
                                placeholder={subField.placeholder}
                                {...field}
                              />
                            </FormControl>
                            {subField.type === "password" && (
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
                </div>
              );
            }

            return (
              <div key={i}>
                {field.type === "select" ? (
                  <FormField
                    control={form.control}
                    name={field.name}
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel htmlFor={field.name}>
                          {field.label}
                        </FormLabel>
                        <FormControl>
                          <select
                            className="auth-input cursor-pointer font-bold"
                            id={field.name}
                            {...field}
                          >
                            <option value="" className="text-gray-400">
                              Select Class Level
                            </option>
                            <option value="Grade 1 Secondary">
                              Grade 1 Secondary
                            </option>
                            <option value="Grade 2 Secondary">
                              Grade 2 Secondary
                            </option>
                            <option value="Grade 3 Secondary">
                              Grade 3 Secondary
                            </option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <FormField
                    control={form.control}
                    name={field.name}
                    render={({ field: inputProps }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel htmlFor={field.name}>
                          {field.label}
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="auth-input"
                            id={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            {...inputProps}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            );
          })}
          <Link to="/auth" className="!mt-0 w-fit underline">
            already have an account? login
          </Link>
          <SubmitBtn disabled={form.formState.isSubmitting}>
            <h1>Sign Up</h1>
          </SubmitBtn>
        </form>
      </div>
      <div className="max-lg:hidden h-dvh">
        <img
          src="/register.jpg"
          alt="Description of image"
          className="object-cover h-full w-full"
        />
      </div>
    </Form>
  );
}

const inputFields = [
  [
    {
      type: "text",
      placeholder: "ahmed",
      label: "first name",
      name: "fn",
    },
    {
      type: "text",
      placeholder: "ali",
      label: "last name",
      name: "ln",
    },
  ],
  {
    type: "email",
    placeholder: "example@gmail.com",
    label: "email",
    name: "email",
  },
  [
    {
      type: "password",
      placeholder: "Ahmed@12345",
      label: "password",
      name: "password",
    },
    {
      type: "password",
      placeholder: "Ahmed@12345",
      label: "confirm password",
      name: "cpassword",
    },
  ],
  {
    type: "number",
    placeholder: "0123456789",
    label: "phone number",
    name: "phoneNumber",
  },
  {
    type: "select",
    placeholder: "Select Class Level",
    label: "class level",
    name: "classLevel",
  },
];

const defaultValues = {
  fn: "",
  ln: "",
  email: "",
  password: "",
  cpassword: "",
  phoneNumber: "",
  classLevel: "",
};
