import { Loader2 } from "lucide-react";

import { Button } from "./ui/button";

export default function LoadingButton({ loading, children, ...rest }) {
  return (
    <Button type="submit" disabled={loading} {...rest}>
      {loading ? <Loader2 className="animate-spin size-5" /> : null}
      {children}
    </Button>
  );
}
