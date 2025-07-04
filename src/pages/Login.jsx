import { Link } from "react-router";

import LoginForm from "@/features/auth/LoginForm";

// import loginImg from "/login.jpg";

export default function Login() {
  return (
    <>
      {/* <div className="max-lg:col-span-2 order-1 space-y-10 w-[80%] mx-auto flex flex-col justify-center"> */}
      <h1 className="lg:text-3xl text-xl text-center font-bold">
        Sign in to your account
      </h1>

      <LoginForm />

      <div className="flex flex-col gap-4">
        <p className="text-center text-sm">
          Forgot your password?{" "}
          <Link
            to="/auth/forgot-password"
            className="underline hover:text-primary"
          >
            Reset password
          </Link>
        </p>
        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/auth/register" className="underline hover:text-primary">
            Register a new account
          </Link>
        </p>
      </div>
      {/* </div> */}

      {/* <div className="h-dvh max-lg:hidden">
        <img
          src={loginImg}
          alt="log in image"
          className="object-cover h-full w-full"
        />
      </div> */}
    </>
  );
}
