import React, { useState } from "react";
import { InputWithLabel } from "./Input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import CreditMethod from "./CreditMethod";
import PaypalMethod from "./PaypalMethod";
import vise from "../assets/visalogo.png"; // Adjust the path as necessary
import paypal from "../assets/PayPal.logo.png"; // Adjust the path as necessary

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  return (
    <div className="w-full p-4 border rounded-lg shadow-md">
      <form action="">
        <div className="flex justify-between items-center gap-4 mb-6">
          <InputWithLabel label="country" />
          <InputWithLabel label="state/union territory" />
        </div>
        <div>
          <h1 className="text-lg font-bold mb-4">Payment Method</h1>
          <RadioGroup
            defaultValue={paymentMethod}
            onValueChange={setPaymentMethod}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="credit" id="r1" />
                <Label htmlFor="r1" className="font-semibold text-lg">
                  Credit/Debit Card
                </Label>
              </div>

              <img src={vise} alt="Visa Logo" width={50} height={50} />
            </div>
            {paymentMethod === "credit" && <CreditMethod />}
            <div className="flex items-center gap-3 mb-3 justify-between">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="paypal" id="r2" />
                <Label htmlFor="r2" className="font-semibold text-lg">
                  Paypal
                </Label>
              </div>
              <img src={paypal} alt="PayPal Logo" width={60} height={60} />
            </div>
            {paymentMethod === "paypal" && <PaypalMethod />}
          </RadioGroup>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
