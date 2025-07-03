import { Link } from "react-router";

import RegisterForm from "@/features/auth/RegisterForm";

export default function Register() {
  return (
    <>
      {/* <div className="max-lg:col-span-2 space-y-20 w-[80%] mx-auto flex flex-col justify-center"> */}

      <h1 className="lg:text-3xl text-xl text-center font-bold">
        Create your account
      </h1>
      <RegisterForm />

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/auth" className="underline hover:text-primary">
          Log in
        </Link>
      </p>

      {/* </div> */}
      {/* <div className="max-lg:hidden h-dvh">
        <img
          src="/register.jpg"
          alt="Description of image"
          className="object-cover h-full w-full"
        />
      </div> */}
    </>
  );
}
