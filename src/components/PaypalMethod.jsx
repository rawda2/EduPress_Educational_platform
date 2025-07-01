import React from "react";
import { InputWithLabel } from "./Input";

const PaypalMethod = () => {
  return (
    <div className="flex flex-col gap-10">
      <InputWithLabel
        label="PayPal Email"
        type="email"
        placeholder="you@example.com"
      />
      <InputWithLabel label="PayPal Password" type="password" placeholder="••••••••" />
    </div>
  );
};

export default PaypalMethod;
