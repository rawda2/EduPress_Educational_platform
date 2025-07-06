import { Loader2 } from "lucide-react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import useUser from "@/features/auth/useUser";

import userAvatar from "@/assets/user-avatar.png";

const Profile = () => {
  const { isLoading, data: user, error } = useUser();

  if (isLoading)
    return <Loader2 className="animate-spin size-8 mx-auto mt-20" />;

  if (error)
    return (
      <p className="text-destructive text-center p-4">
        Failed to load profile.
      </p>
    );

  return (
    <div>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Card className="w-full max-w-4xl mx-auto shadow-sm sm:shadow-md rounded-lg sm:rounded-xl border sm:border-none p-4 sm:p-6 md:p-8">
          <CardHeader className="flex flex-col items-center text-center space-y-4">
            <Avatar className="cursor-pointer size-10">
              <AvatarImage src={userAvatar} alt="avatar" />
              <AvatarFallback>{user.fullName}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold">
                {user.fullName}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base ">
                {user.role === "user" ? (
                  <>Student • {user.classLevel}</>
                ) : (
                  user.role.charAt(0).toUpperCase() + user.role.slice(1)
                )}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base">
            <div className="space-y-1">
              <span className="font-semibold text-muted-foreground">
                Email:
              </span>
              <p className="break-all">{user.email}</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-muted-foreground">
                Phone Number:
              </span>
              <p>{user.phoneNumber}</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-muted-foreground">
                Verified:
              </span>
              <p
                className={`${
                  user.isVerified ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.isVerified ? "Yes ✅" : "No ❌"}
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-muted-foreground">
                Created At:
              </span>
              <p>{new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
