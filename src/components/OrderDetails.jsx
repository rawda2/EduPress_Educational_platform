import React from "react";
import { Input } from "./ui/input";
import { BadgePercent } from "lucide-react";
import { Button } from "./ui/button";

const price = [
  { name: "price", price: "$50" },
  { name: "discount", price: "$0" },
  { name: "tax", price: "$0" },
];
const OrderDetails = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3">OrderDetails</h1>
      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-start gap-4 p-4 rounded-lg shadow-md border ">
          <div className="w-[120px] h-[120px] bg-amber-300"></div>
          <div>
            <span className="text-primary">Design</span>
            <h1 className="text-lg font-bold">
              Introduction to User Experience Design
            </h1>
            <p className="text-muted-foreground">
              155 Lectures . 22 Total Hours
            </p>
            <h2 className="text-lg font-bold">$50</h2>
          </div>
        </div>
        <div className="flex justify-start items-center gap-4 p-4 rounded-lg shadow-md border">
          <BadgePercent />
          <input
            placeholder="APPLY COUPON CODE"
            className="border-none outline-none"
          />
        </div>
        <div className="flex justify-start items-center flex-col p-4 rounded-lg shadow-md border">
          <div className="w-full flex flex-col gap-2 pb-2 border-b-2">
            {price.map((item, index) => (
              <div
                key={index}
                className="w-full flex justify-between items-center"
              >
                <span className="text-muted-foreground">{item.name} :</span>
                <span className="font-bold">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-center pt-2">
            <span className="text-lg font-bold">Total :</span>
            <span className="font-bold">$50</span>
          </div>
        </div>
          <Button className="w-full">Checkout</Button>
      </div>
    </div>
  );
};

export default OrderDetails;
