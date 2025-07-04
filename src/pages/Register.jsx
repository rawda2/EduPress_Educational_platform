import { Link } from "react-router";
import { registerUser } from "@/services/AuthAPI";
import { RegisterFormInputs } from "@/features/auth/RegisterForm";

export default function Register() {
  return (
    <Form {...form}>
      <div className="max-lg:col-span-2 space-y-20 w-[80%] mx-auto flex flex-col justify-center">
        <h1 className="lg:text-3xl text-xl text-center font-bold">
          Create your account
        </h1>
        <form className="flex flex-col w-full gap-6 [&_label]:font-bold [&_label]:text-lg" onSubmit={form.handleSubmit(onSubmit)}>
          <RegisterFormInputs
            {...{ form, showPassword, setShowPassword }}
          />
        </form>
      </div>
      <div className="max-lg:hidden h-dvh">
        <img
          src="/register.jpg"
          alt="Description of image"
          className="object-cover h-full w-full"
        />
      </div> */}
    </>
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
