import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";

export default function EmptyCart() {
  return (
    <div className="my-20 flex flex-col items-center justify-center px-4">
      <Card className="bg-transparent border-0 max-w-md w-full text-center">
        <CardHeader>
          <ShoppingCart className="stroke-1 mx-auto mb-2 size-14 text-muted-foreground" />
          <CardTitle className="text-2xl">No Items in Your Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            It seems like you haven’t added anything to your cart yet.
            Let&apos;s fix that!
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link to="/lessons">Check out some lessons </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
