import LessonDetails from "@/components/LessonDetails";
import { LessonReviews } from "@/components/LessonReviews";
import Rating from "@/components/Rating";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import React from "react";

const SingleLesson = () => {
  const data = {
    title: "Introduction to User Experience Design",
    desc: "This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digitallandscape.",
    price: 50,
  };
  return (
    <div className=" px-4">
      <div className="container mx-auto flex justify-center items-between gap-5">
        <div className="pt-4">
          <div className="flex flex-col items-start justify-start gap-3">
            <h1 className="text-3xl font-extrabold mb-3">{data.title}</h1>
            <p className="max-w-[80%] text-muted-foreground">{data.desc}</p>
            <p className="flex items-center">
              <Rating stars={4} /> | 22 Total Hours. 155 Lectures. All levels
            </p>
            <div className="flex items-center justify-start gap-2">
              <div className="bg-gray-100 p-2 rounded-full text-black">
                <User />
              </div>
              <span >
                created By{" "}
                <span className="font-semibold text-primary">John Doe</span>
              </span>
            </div>
            <LessonDetails/>

          </div>
        </div>
        <div className="p-4 rounded-2xl bg-accent mt-2 h-fit">
          <div className="w-[300px] h-[150px] bg-white"></div>
          <div>
            <h1 className="text-2xl font-bold text-start my-3">
              <span>${data.price}</span>
              <span>${data.price * 1.2}</span>
            </h1>
            <div className="flex items-center justify-center flex-col gap-3">
              <Button variant={"default"} size={"full"}>
                Add to Cart
              </Button>
              <Button variant={"outline"} size={"full"}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <LessonReviews />
    </div>
  );
};

export default SingleLesson;
