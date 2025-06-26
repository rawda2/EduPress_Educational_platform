import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export default function SubmitBtn({
  className = "",
  disabled,
  children,
  ...rest
}) {
  return (
    <Button
      type="submit"
      className={`bg-foreground hover:bg-[#0a273d] hover:[&>svg]:translate-x-1 [&>svg]:transition-all w-fit flex items-center !p-6 text-lg gap-4 font-bold ${className}`}
      disabled={disabled}
      {...rest}
    >
      {disabled ? (
        <>
          {children} <Loader2 className="animate-spin size-6" />
        </>
      ) : (
        children || "Submit"
      )}
    </Button>
  );
}
