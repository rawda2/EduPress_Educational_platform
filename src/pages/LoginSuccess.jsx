import { BadgeCheck } from "lucide-react";
import { Link } from "react-router";

export default function LoginSuccess({ login, resetPassword }) {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center col-span-2 font-bold gap-4">
      <BadgeCheck className="text-green-600" size={48} strokeWidth={3} />
      <h1 className="text-2xl">
        {login
          ? "You are logged in successfully!"
          : resetPassword
          ? "You have successfully reset your password!"
          : ""}
      </h1>
      <Link to="/profile" className="underline hover:text-blue-900">
        view profile
      </Link>
    </div>
  );
}
