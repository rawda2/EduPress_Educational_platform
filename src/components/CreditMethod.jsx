import React from "react";
import { InputWithLabel } from "./Input";
const inputs = [
  { label: "Card Number", type: "text", placeholder: "1234 5678 9012 3456" },
  { label: "Cardholder Name", type: "text", placeholder: "John Doe" },
  { label: "Expiry Date", type: "text", placeholder: "MM/YY" },
  { label: "CVV", type: "text", placeholder: "123" },
];
const CreditMethod = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {inputs.map((input, index) => (
        <InputWithLabel key={index} {...input} />
      ))}
    </div>
  );
};

export default CreditMethod;
