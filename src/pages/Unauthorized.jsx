// src/pages/Unauthorized.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground transition-colors">
      <div className="max-w-md w-full bg-muted/40 dark:bg-muted/20 rounded-xl shadow-md p-8 text-center border border-border">
        <div className="flex justify-center mb-4 text-destructive">
          <AlertTriangle className="w-12 h-12" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-destructive mb-3">
          Access Denied
        </h1>
        <p className="text-muted-foreground mb-6 text-base">
          You are not authorized to access this page. Please log in with the correct account.
        </p>
        <Button
          className="w-full"
          onClick={() => (window.location.href = "/auth")}
        >
          Back to Login
        </Button>
      </div>
    </div>
  );
}
