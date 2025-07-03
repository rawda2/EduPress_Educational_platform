import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";

import { RegisterSchema } from "@/validations/RegisterSchema";
import useRegister from "./useRegister";

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues,
  });

  const [showPassword, setShowPassword] = useState(false);

  const { isLoading, register } = useRegister();

  const onSubmit = async (data) => {
    const { fn, ln, ...rest } = data;
    const userData = {
      ...rest,
      fullName: `${fn} ${ln}`,
    };

    register(userData, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg mx-auto flex flex-col w-full gap-4 [&_label]:font-bold [&_label]:text-base [&_label]:capitalize"
      >
        {inputFields.map((field, i) => {
          if (Array.isArray(field)) {
            return (
              <div key={i} className="flex flex-col sm:flex-row w-full gap-4">
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
                              id={subField.name}
                              placeholder={subField.placeholder}
                              type={
                                subField.type === "password" && showPassword
                                  ? "text"
                                  : subField.type
                              }
                              {...field}
                            />
                          </FormControl>
                          {subField.type === "password" && (
                            <Button
                              size="icon"
                              type="button"
                              variant="ghost"
                              className="absolute right-0 top-1/2 -translate-y-1/2 !bg-transparent"
                              onClick={() => setShowPassword((prev) => !prev)}
                            >
                              {showPassword ? <Eye /> : <EyeOff />}
                            </Button>
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
                      <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                      <Select
                        id={field.name}
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full cursor-pointer">
                            <SelectValue placeholder="Select Your Class Level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {classLevels.map((val) => (
                            <SelectItem key={val} value={val}>
                              {val}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                      <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
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

        <LoadingButton loading={form.formState.isSubmitting || isLoading}>
          Sign Up
        </LoadingButton>
      </form>
    </Form>
  );
}

const classLevels = [
  "Grade 1 Secondary",
  "Grade 2 Secondary",
  "Grade 3 Secondary",
];

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
