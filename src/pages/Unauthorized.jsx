import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 sm:p-10 text-center space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="size-20 stroke-1 text-destructive" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-destructive">
          Access Denied
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed">
          You do not have permission to view this page. Please log in with an
          authorized account or return to the homepage.
        </p>

        <Button asChild className="w-full">
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
